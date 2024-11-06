import { INode, INodeData, INodeParams, ICommonObject } from '../../../src/Interface';
import { Document } from 'langchain/document';
import { TextSplitter } from 'langchain/text_splitter';
import fs from 'fs';
import path from 'path';
import os from 'os';
import https from 'https';
import fetch from 'node-fetch';

const ALFRESCO_URL = "https://alfresco-demo.crestsolution.com:8080/alfresco/api/-default-/public/alfresco/versions/1/nodes";
const ALFRESCO_USERNAME = "admin";
const ALFRESCO_PASSWORD = "admin";

class AlfrescoRecursiveFolderLoader_DocumentLoaders implements INode {
    label: string;
    name: string;
    version: number;
    description: string;
    type: string;
    icon: string;
    category: string;
    baseClasses: string[];
    inputs: INodeParams[];
    documents: Document[]; // Store documents after loading

    constructor() {
        this.label = 'Alfresco Recursive Folder Loader';
        this.name = 'alfrescoRecursiveFolderLoader';
        this.version = 1.0;
        this.type = 'Document';
        this.icon = 'alfresco-icon.svg';
        this.category = 'Document Loaders';
        this.description = 'Recursively loads documents from an Alfresco folder';
        this.baseClasses = [this.type];
        this.inputs = [
            {
                label: 'Alfresco Base URL',
                name: 'baseUrl',
                type: 'string',
                placeholder: 'http://alfresco-demo.com:8080',
            },
            {
                label: 'Username',
                name: 'username',
                type: 'string',
                placeholder: 'Enter Alfresco username',
            },
            {
                label: 'Password',
                name: 'password',
                type: 'password',
                placeholder: 'Enter Alfresco password',
            },
            {
                label: 'Folder Node ID',
                name: 'folderId',
                type: 'string',
                placeholder: 'Enter Node ID for the folder',
            },
            {
                label: 'Text Splitter',
                name: 'textSplitter',
                type: 'TextSplitter',
                description: 'Splits large text documents into smaller chunks for processing.',
            },
        ];
        this.documents = [];
    }

    async fetchDocumentContent(nodeId: string): Promise<{ content: Buffer, contentType: string }> {
        const url = `${ALFRESCO_URL}/${nodeId}/content`;
        const agent = new https.Agent({ rejectUnauthorized: false });

        const response = await fetch(url, {
            headers: { Authorization: `Basic ${Buffer.from(`${ALFRESCO_USERNAME}:${ALFRESCO_PASSWORD}`).toString('base64')}` },
            agent,
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch document content for node ${nodeId}: ${response.statusText}`);
        }

        const contentType = response.headers.get('content-type') || '';
        const content = Buffer.from(await response.arrayBuffer());
        return { content, contentType };
    }

    async fetchNodeChildren(nodeId: string): Promise<any> {
        const url = `${ALFRESCO_URL}/${nodeId}/children`;
        const agent = new https.Agent({ rejectUnauthorized: false });

        const response = await fetch(url, {
            headers: { Authorization: `Basic ${Buffer.from(`${ALFRESCO_USERNAME}:${ALFRESCO_PASSWORD}`).toString('base64')}` },
            agent,
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch children for node ${nodeId}: ${response.statusText}`);
        }

        return response.json();
    }

    async extractText(content: Buffer, contentType: string): Promise<string> {
        if (contentType.includes('markdown') || contentType.includes('md')) {
            return content.toString('utf-8');
        } else {
            throw new Error('Unsupported content type. Only Markdown files are supported.');
        }
    }

    async processFolderRecursively(folderId: string, textSplitter: TextSplitter): Promise<void> {
        const folderData = await this.fetchNodeChildren(folderId);

        for (const item of folderData.list.entries) {
            const node = item.entry;

            if (node.isFolder) {
                await this.processFolderRecursively(node.id, textSplitter);
            } else {
                try {
                    const { content, contentType } = await this.fetchDocumentContent(node.id);
                    const text = await this.extractText(content, contentType);

                    const chunks = await textSplitter.splitText(text);
                    chunks.forEach((chunk: string) =>
                        this.documents.push(
                            new Document({
                                pageContent: chunk,
                                metadata: {
                                    name: node.name,
                                    created_date: node.createdAt,
                                    modified_date: node.modifiedAt,
                                    uploaded_by: node.createdByUser.displayName,
                                    link: `${ALFRESCO_URL}/${node.id}/content`,
                                },
                            })
                        )
                    );
                } catch (error) {
                    console.error(`Error processing node ${node.id}: ${error.message}`);
                }
            }
        }
    }

    async init(nodeData: INodeData, input: string, options?: ICommonObject): Promise<any> {
        const baseUrl = nodeData.inputs?.baseUrl as string;
        const folderId = nodeData.inputs?.folderId as string;
        const textSplitter = nodeData.inputs?.textSplitter as TextSplitter;

        try {
            await this.processFolderRecursively(folderId, textSplitter);
            console.log('Total Documents Loaded:', this.documents.length);
        } catch (error) {
            console.error('Error loading folder contents:', error);
        }

        return this.documents;
    }

    async load(nodeData: INodeData): Promise<Document[]> {
        return this.documents; // Return the stored documents from init
    }
}

const getInstance = () => new AlfrescoRecursiveFolderLoader_DocumentLoaders();

module.exports = { nodeClass: AlfrescoRecursiveFolderLoader_DocumentLoaders, getInstance };
