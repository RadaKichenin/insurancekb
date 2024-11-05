# GUIDELINES ON

# DEPOSIT INFORMATION SYSTEMS AND SUBMISSION

## ISSUE DATE : 22 FEBRUARY 2023


## TITLE Guidelines on Deposit Information Systems and Submission

_i_

- SECTION 1: INTRODUCTION TABLE OF CONTENTS
- SECTION 2: FUNDAMENTAL TENETS
- SECTION 3: MINIMUM REQUIREMENTS FOR DEPOSIT LIABILITY SYSTEMS
- SECTION 4: SUBMISSION OF INFORMATION TO PIDM
- SECTION 5: ANNUAL CERTIFICATION OF COMPLIANCE
- SECTION 6: DEPOSITS UPON TRANSFER AND ASSUMPTION
- SECTION 7: DOCUMENTATION OF SFF GENERATION PROCESS
- SECTION 8: NEW DEPOSIT-TAKING MEMBERS
- Appendix I: PIDM’s Standard File Format
   - Appendix I(a): Master File
   - Appendix I(b): Account Holder File
   - Appendix I(c): Term Deposit Details File
   - Appendix I(d): Beneficiary File
   - Appendix I(e): Address File
   - Appendix I(f): Financial Replacement File Format
   - Appendix I(g): Contact Details for Internet Banking Accounts File Format
   - Appendix I(h): Branch Code File Format
- Appendix II: Product Summary Report on SFF for Records as at DD/MM/YYYY
      - DD/MM/YYYY Appendix III: Reconciliation Template of Deposit Balance in General Ledger vs. SFF for Records as at
- Appendix IV (a): Aggregation Summary Report for Records as at 31 December YYYY
- Appendix IV (b): Reconciliation Between Aggregation Summary Report and RTID
- Appendix V: Submission of Documentation of SFF Generation Process
- Appendix VI: Annual Certification of Compliance
- Appendix VII: Confirmation of No Changes to Documentation of SFF Generation Process
- Appendix VIII: Checklist for Annual Submission
- Appendix IX: Checklist for Readiness Testing /Special Examination Submission


```
TITLE Guidelines on Deposit Information Systems and Submission
```
## SECTION 1: INTRODUCTION TABLE OF CONTENTS

## BACKGROUND

## 1.1 Perbadanan Insurans Deposit Malaysia (“PIDM”) is mandated under subsection 4(1) of

## the Malaysia Deposit Insurance Corporation Act 2011 (the “Act”), to amongst others,

## administer a deposit insurance system and provide insurance against the loss of part or

## all deposits of a deposit-taking member (“DTM”). PIDM is also the resolution authority

## for its member institutions and is equipped with a wide range of intervention and failure

## resolution powers to resolve troubled member institutions in an orderly manner to

## minimise disruption to the financial system and preserve financial system stability. It is

## thus important that operational resolution readiness capabilities, including

## reimbursement readiness, are developed during good times to meet these objectives and

## this is facilitated by amongst others, PIDM’s access to the DTM’s deposit data and other

## specific data as required.

## 1.2 PIDM has developed a robust deposit liability information management system (“PIDM’s

## System”) that processes the information submitted by DTMs. Detailed deposit data and

## other specific data received from the DTMs in PIDM’s standard file format (“SFF”) will be

## loaded into PIDM’s System, which will perform, among others, the checking of the

## integrity and completeness of the data as well as to faciliate the insured deposits

## computation. PIDM’s System will also facilitate the reimbursement of insured deposits to

## depositors in the unlikely event of a DTM failure.

## OBJECTIVES

## 1.3 The key objectives of the Guidelines on Deposit Information Systems and Submission

## (“DISS Guidelines”) are to:

## (a) ensure the readiness of the DTMs’ deposit systems in providing the necessary

## deposit information to PIDM in SFF for the purposes of insured deposits

## computation and prompt reimbursement of insured deposits;

## (b) ensure the operational resolution readiness of DTMs in providing the relevant

## information to PIDM for the purpose of performance of the resolution function;

## and


```
TITLE Guidelines on Deposit Information Systems and Submission
```
## (c) facilitate the computation and validation of DTMs’ Total Insured Deposits (“TID”)

## for premium purposes.

## 1.4 The DTMs’ compliance with the requirements of these DISS Guidelines will ensure

## consistency, reliability and availability of information to PIDM on an annual basis as well

## as when the need arises.

## EFFECTIVE DATE

## 1.5 These DISS Guidelines are made pursuant to the powers conferred by Section 209 of the

## Act.

## 1.6 These DISS Guidelines shall supersede the Guidelines on Deposit Information Systems

## and Submission issued on 30 March 2020.

## 1.7 These DISS Guidelines are effective from the assessment year 2023, save for the

## requirements on the following SFF fields, which are effective from the assessment year

## 2024 onwards:

## • Master File – Column 30 (Tagging) and Column 31 (Conditions of Tagging)

## • Account Holder File – Column 13 – Passport Country of Issuance

## 1.8 PIDM may, in such form and subject to such terms and conditions as PIDM thinks fit,

## specify such other periods or dates for any acts or things to be done under these DISS

## Guidelines.

## 1.9 Unless expressly stated otherwise, any information or document required to be

## submitted to PIDM under these DISS Guidelines, including any letter, report, form,

## returns and action plan, shall be submitted online through PIDM’s Industry Portal. The

## original hard copy shall be kept by the DTMs.

## 1.10 A reference to a statute or other law includes regulations and other instruments under it

## and consolidations, amendments, re-enactments or replacements of any of them.

## 1.11 Unless otherwise specified, words used in these DISS Guidelines shall have the same

## meanings as set out in section 2 of the Act.


```
TITLE Guidelines on Deposit Information Systems and Submission
```
## ENQUIRIES

## 1.12 Enquiries relating to these DISS Guidelines may be directed to

## diss_guidelines@pidm.gov.my


```
TITLE Guidelines on Deposit Information Systems and Submission
```
## SECTION 2: FUNDAMENTAL TENETS

## 2.1 The development of these DISS Guidelines is founded on the following key tenets:

## (a) Facilitate the readiness of PIDM and DTM to effectively conduct the

## reimbursement of insured deposits and carry out orderly resolution

## In the unlikely event of a DTM’s failure, PIDM must be equipped to carry out

## orderly resolution of the DTM as well as to conduct the computation of insured

## depositors’ entitlements to effect a reimbursement. Therefore, DTMs shall be

## able to promptly submit their information in SFF upon request by PIDM. In order

## to ensure the accuracy and speedy computation of insured depositors’

## entitlements, DTMs shall put in place and manage the operation of an effective

## and efficient deposit liability system. This would ensure that DTMs have the

## capacity to provide the necessary deposit information at the service level and

## quality as required by PIDM.

## (b) Access and rights to DTM’s deposit information and system

## In order to conduct the validation of information submitted to PIDM and

## particularly to prepare for and/or perform the reimbursement of insured deposits

## in the event of a DTM’s failure, PIDM would require full access and rights over the

## DTMs’ deposit information and systems. This is to ensure speedy access, retrieval

## and computation of insured depositor’s entitlements based on PIDM’s insured

## deposit rules.

## In the case of DTMs that outsource their deposit systems and other relevant

## systems to third party service providers, the DTMs should make or cause to be

## made, the information accessible to PIDM upon request. The DTMs should also

## ensure that third party service providers and the outsourced systems meet the

## requirements of these DISS Guidelines, where relevant.

## (c) Facilitate the Calculation and Validation of TID

## Premiums are collected by PIDM on an annual basis and are derived by applying

## a specified premium rate to the TID held by a DTM. Every DTM submits the Return

## on Total Insured Deposits (“RTID”) to PIDM by 31 May of each assessment year.

## The annual submission of information in SFF and the reconciliation reports will

## facilitate the calculation and validation of the DTMs’ TID.


```
TITLE Guidelines on Deposit Information Systems and Submission
```
## SECTION 3: MINIMUM REQUIREMENTS FOR DEPOSIT LIABILITY SYSTEMS

## Maintaining unique reference number for each depositor

## 3.1 In line with PIDM’s scope of coverage whereby deposits owned by the same depositor

## will be aggregated, DTMs shall maintain a unique reference number for each depositor

## to ensure accuracy of the insured deposits computation.

## A depositor may be uniquely identified in the DTMs’ deposit systems by reference to the

## following:

## (a) For individuals : Customer Information File (“CIF”) number; and/or Identification

## card number (Old & New National Registration Identity Card (“NRIC”) number,

## Army/Police identification card number, Passport number); and

## (b) For non-individuals (e.g. businesses, government bodies and others) : Customer

## Information File (“CIF”) number; and/or Registration number or equivalent.

## DTMs shall ensure that the identification information submitted in the SFF will enable a

## depositor to be uniquely identified for purposes of facilitating PIDM’s insured deposits

## calculation.

## Reconciliation of deposit balances in subsidiary ledger and general ledger

## 3.2 DTMs shall ensure that their subsidiary ledger and general ledger deposit balances are

## reconciled at all times. This requirement would provide greater assurance on the

## accuracy and quality of deposit information provided to PIDM in the SFF.

## Identification of insurability status and incorporation of PIDM deposit product code

## 3.3 To ensure that each deposit product is identifiable, PIDM has introduced a process for

## the issuance of standardised and unique deposit product codes. The Guidelines on

## Submission of Deposit Product Information set out, amongst others, the process involved

## in the issuance of the deposit product codes.


```
TITLE Guidelines on Deposit Information Systems and Submission
```
## 3.4 DTMs’ deposit systems shall be able to identify the insurability status of all deposit

## products and incorporate the deposit product code issued by PIDM. This identification

## will facilitate the accuracy of computation of insured deposits.

## Classification of deposits by account type

## 3.5 In line with the separate insurance coverage provided to each account type (i.e. Individual

## Person, Individual Person – Joint, Individual Person – Trust, Sole Proprietorship,

## Partnership and Non-Individual Person and Non-Individual Person – Trust), the DTMs’

## deposit systems shall be able to identify each depositor by account type as follows:

## Account Type Definition

## 1. Individual Person A personal account opened by a natural person

## for himself or herself.

## 2. Individual Person – Joint An account opened by two (2) or more natural

## persons jointly for themselves.

## 3. Individual Person – Trust An account opened by a natural person

## (excluding sole proprietorship) for the benefit

## of any beneficiary where appropriate

## disclosures are made to the DTMs on opening

## of the trust account in accordance with the

## Malaysia Deposit Insurance Corporation

## (Disclosure Requirements For Trust Accounts

## And Joint Accounts) Regulations 2012.

## 4. Sole Proprietorship An account opened by a natural person for his

## or her business which is registered as a sole

## proprietorship.

## 5. Partnership An account opened as a registered business

## partnership (excluding a limited liability

## partnership).

## 6. Non-Individual Person An account opened by a non-natural person

## (such as registered companies, societies

## (including clubs), limited liability partnerships,

## government agencies, statutory bodies, co-

## operatives, registered trade unions,

## government departments etc.) other than sole

## proprietorships and partnerships.


```
TITLE Guidelines on Deposit Information Systems and Submission
```
## Account Type Definition

## 7. Non-Individual Person – Trust An account opened which falls under account

## type (4), (5) or (6) above for the benefit of any

## beneficiary where appropriate disclosures are

## made to the DTMs on opening of the trust

## account in accordance with the Malaysia

## Deposit Insurance Corporation (Disclosure

## Requirements For Trust Accounts And Joint

## Accounts) Regulations 2012.

## Computation of interest or return

## 3.6 The deposit systems shall be able to compute interest or return for each account on a

## daily basis. This is to ensure that the interest or return amount is allocated to the

## respective depositors’ account for computation of amount of insured deposits for

## purpose of reimbursement of insured deposits to depositors.

## Beneficiary information of trust accounts

## 3.7 As every beneficiary of trust accounts enjoys separate protection coverage by PIDM, the

## deposit systems must have the capability of maintaining necessary beneficiary

## information for trust accounts (each beneficiary’s name/identifier code and their

## respective percentage of beneficial interest). The information should be kept updated as

## and when the trustees provide such information and/or upon PIDM’s requests for such

## information to be updated.

## Tracking of remittance suspense and bills payable

## 3.8 The DTMs’ deposit and remittance systems shall be able to identify and track whether

## remittances and bills payable instruments (such as cashier order, interbank GIRO,

## internet banking or telegraphic transfer) are made through cash payments or by debiting

## of deposit accounts. Where relevant, these systems shall be capable of identifying

## whether the source of debiting originates from an Islamic or conventional deposit

## account. This would facilitate the conduct of relevant adjustments of the deposit balances

## with the remittance suspense and outstanding bills payable for calculation of amount of

## insured deposits.


```
TITLE Guidelines on Deposit Information Systems and Submission
```
## Tracking the clearing status of cheques

## 3.9 The DTMs’ deposit systems shall be able to track whether cheques credited into the

## deposit account have been sent (or the cheque truncation image has been transmitted)

## for clearing. The information is required to determine if the insurable balances of deposit

## accounts need to be adjusted for un-cleared and returned cheques.

## Timely generation of accurate deposit information for the purposes of reimbursement

## of insured deposits

## 3.10 The DTMs’ deposit and remittance systems shall be able to facilitate the generation and

## reconciliation of relevant deposit information in SFF as follows:

## (a) SFF files as set out in Appendices I(a), I(b), I(c), I(d), I(e), I(g) and I(h) within twenty

## four (24) hours from the completion of the end-of-day processing^1 on such date

## as may be required by PIDM; and

## (b) SFF file as set out in Appendix I(f) within six (6) hours from the completion of the

## end-of-day processing on such date as may be required by PIDM.

(^1) When all transactions made on that business day are processed and posted on the deposit liability records of
the depositor.


```
TITLE Guidelines on Deposit Information Systems and Submission
```
## SECTION 4: SUBMISSION OF INFORMATION TO PIDM

## 4.1 PIDM requires DTMs to submit information to PIDM as follows:

## (a) Annual Submission

## 4.2 DTMs shall submit the deposit information and other relevant information in SFF for the

## position as at 31 December of the preceding year, together with the stipulated summary

## and reconciliation reports, by 31 May of each assessment year (or the immediately

## preceding working day if 31 May falls on a weekend or a public holiday in Kuala Lumpur).

## Please refer to Appendix I on PIDM’s SFF requirements and the instructions for

## submission.

## A checklist of information or documents required for annual submission is set out in

## Appendix VIII, which includes:

## • Master file as set out in Appendix I(a);

## • Account holder file as set out in Appendix I(b);

## • Term deposit details file as set out in Appendix I(c);

## • Beneficiary details file as set out in Appendix I(d);

## • Addresses file as set out in Appendix I(e); and

## • Branch code file as set out in Appendix I(h).

## 4.3 For the submission of the beneficiary details file as set out in Appendix I(d), DTMs are to

## provide the beneficiary details based on the information available in the DTMs’ records

## as at 31 December of the preceding year (see paragraph 3.7 above).

## 4.4 When reporting outstanding balances of deposit accounts in SFF, all adjustments related

## to the accounts shall be incorporated (such as from clearing and remittances suspense

## account, including manual adjustments such as late inward clearing adjustment, omitted

## transactions).


```
TITLE Guidelines on Deposit Information Systems and Submission
```
## (b) Submission of deposit information and other relevant information in SFF on a

## date required by PIDM for readiness testing or for special examination^2

## 4.5 PIDM may require a DTM to submit the deposit information and other relevant

## information in SFF on a date as specified by PIDM, for the purposes of testing the

## readiness of DTMs to generate the required information within the stipulated timeframe

## (“readiness testing”); or for PIDM to prepare for and/or perform the reimbursement of

## insured deposits in the event of a DTM’s failure.

## A checklist of information or documents required for the above purpose is set out in

## Appendix IX, which includes:

## • Master file as set out in Appendix I(a);

## • Account holder file as set out in Appendix I(b);

## • Term deposit details file as set out in Appendix I(c);

## • Beneficiary details file as set out in Appendix I(d);

## • Addresses file as set out in Appendix I(e);

## • Financial replacement file as set out in Appendix I(f) for each deposit sub-

## system;

## • Contact details for internet banking accounts as set out in Appendix I(g);

## and

## • Branch code file as set out in Appendix I(h).

## Please also refer to Appendix I on PIDM’s SFF requirements and the instructions for

## submission.

## 4.6 For the submission of the beneficiary details file as set out in Appendix I(d), DTMs are to

## provide the beneficiary details based on the information available and updated in the

## DTMs’ records as at such date as may be required by PIDM.

## 4.7 At PIDM’s request for the updated trust account beneficiary(ies) information, the DTM

## shall promptly procure the trustees to provide the required information together with

## the trustee’s statutory declaration^3 certifying the accuracy of the records submitted. The

## DTM should take all reasonable steps to ensure the trustee’s submission of the required

## information and the statutory declaration in a timely manner.

(^2) PIDM is empowered under Section 97 of the Act to conduct special examinations of a member institution for
the purposes of, among others, the making of a payment under Chapter 3 of Part IV of the Act.
(^3) Section 42(4)(c)(ii)(C) of the Act.


```
TITLE Guidelines on Deposit Information Systems and Submission
```
## 4.8 When reporting outstanding balances of deposit accounts in SFF, all adjustments related

## to the accounts shall be incorporated (such as from clearing and remittances suspense

## account, including manual adjustments such as late inward clearing adjustment, omitted

## transactions).

## Summary and Reconciliation Reports

## 4.9 DTMs are required to provide the following summary and reconciliation reports to PIDM

## annually, or as and when required:

## (a) Product Summary Report as per the format set out in Appendix II

## This report is for PIDM to validate the summary totals of data submitted in the

## SFF against the DTMs’ records.

## (b) Reconciliation statement between the deposit balance in the general ledger/

## financial statements and that in the SFF, as per the format set out in

## Appendix III

## The reconciliation statement has to be approved by the Chief Financial Officer

## (“CFO”) of the DTM. The reconciliation will provide PIDM with details of the

## adjustment items taken into account by the DTMs in generating the SFF.

## (c) Aggregation Summary Report as per the format set out in Appendix IV(a)

## The information submitted in the report should be compared with the

## information provided in the RTID. The differences noted between the information

## submitted in Appendix IV(a) and the submission provided in RTID, if any, are to be

## reflected in Appendix IV(b).

## All summaries and reconciliation reports are to be submitted to PIDM in the original Excel

## format provided by PIDM.

## Data Management – Information Security, Data Masking and Data Retention

## 4.10 For the purposes of annual submission and readiness testing, DTMs are required to mask

## personal information (such as name, old and new NRIC number, police/army identity card

## number, passport number, business registration number, telephone number, email

## address and residential/mailing addresses) using a masking method that would ensure

## consistency in the masked results, before submitting to PIDM. The masking of personal

## information will ensure the confidentiality of information submitted to PIDM. The


```
TITLE Guidelines on Deposit Information Systems and Submission
```
## masking should be applied to the personal information in all SFF files described in

## Appendix I of these DISS Guidelines.

## 4.11 PIDM may require a DTM to submit unmasked deposit information and other relevant

## information in the SFF for purposes of performing the reimbursement of insured deposits

## under the Act and/or for the purpose of the conduct of PIDM’s special examination of the

## DTM under the Act. This is to ensure that a deposit reimbursement can be undertaken

## accurately with speed and efficiency.

## 4.12 All information and reports submitted to PIDM under these DISS Guidelines should be

## kept by the DTMs for a minimum duration of seven (7) years.


```
TITLE Guidelines on Deposit Information Systems and Submission
```
## SECTION 5: ANNUAL CERTIFICATION OF COMPLIANCE

## 5.1 A DTM’s Chief Executive Officer (“CEO”) and CFO must certify annually, in the form as set

## out in Appendix VI, that:

## (a) the information provided in the SFF for the annual submission purpose has been

## prepared and submitted to PIDM in accordance with the requirements of these

## DISS Guidelines;

## (b) effective key compliance and internal controls have been maintained over the

## recording of transactions and that information provided to PIDM in the SFF for

## the annual submission purpose is, to the best of their knowledge, true and

## correct; and

## (c) the DTM’s deposit liability systems comply with the minimum requirements for

## deposit liability systems as detailed in Section 3 of these DISS Guidelines.

## 5.2 The annual certification of compliance by the CEO and CFO shall be submitted to PIDM

## through PIDM’s Industry Portal, by 31 May of each assessment year (or the immediately

## preceding working day if 31 May falls on a weekend or a public holiday in Kuala Lumpur).

## 5.3 Where deemed relevant, PIDM may require a DTM to obtain an independent external

## assurance on the DTM’s deposit liability systems and the accuracy of the deposit

## information generated by the system.

## 5.4 The independent external assurance is to be conducted by an external party to be

## engaged by the DTM. The external party must have a good track record and expertise or

## relevant experience in assessing the adequacy of the deposit liability systems for

## compliance with these DISS Guidelines. The independent external party must be free

## from any conflict of interest or potential conflict of interest that could impair the ability

## to provide an objective assurance and/or assessment on the areas required.


```
TITLE Guidelines on Deposit Information Systems and Submission
```
## SECTION 6: DEPOSITS UPON TRANSFER AND ASSUMPTION

## 6.1 Where a DTM (transferee DTM) assumes the deposits of another DTM (transferor DTM),

## those deposits, less any withdrawal from the deposits, shall continue to be insured

## separately from any other deposit of the transferee DTM, up to the coverage limit for a

## period of two (2) years, or upon maturity or until full withdrawal, whichever is earlier,

## after the date of transfer and assumption.^4

## 6.2 Transferee DTMs shall ensure that their deposit systems have the ability to identify and

## segregate the deposits assumed by the transferee DTM from the transferor DTM and are

## able to track the withdrawal or maturity of the assumed deposits. Upon request by PIDM,

## the transferee DTM shall provide the deposit records of the transferor DTM to PIDM for

## purposes of separate deposit insurance coverage under Section 43 of the Act.

(^4) Please see Section 43(1) of the Act.


```
TITLE Guidelines on Deposit Information Systems and Submission
```
## SECTION 7: DOCUMENTATION OF SFF GENERATION PROCESS

## 7.1 DTMs shall maintain comprehensive documentation of the SFF generation process setting

## out:

## (a) details of the key systems, processes (including adjustments and reconciliation

## processes) and personnel involved at each stage of generating the SFF files, within

## the stipulated timeframe as set out in paragraph 3. 10 of these DISS Guidelines.

## At minimum, the documentation of the SFF generation process should cover:

## • System overview of the end-to end SFF generation process - including the

## source systems, the data warehouse process, the report generation and

## reconciliation process;

## • The duration of the key processes;

## • The roles and responsibilities of the departments/key personnel involved

## at each stage of the process; and

## • Key compliance and internal controls maintained throughout the process;

## which includes ensuring adequacy of IT controls of the key systems and its

## IT environment (security of key systems, controls on data quality, data

## integrity, accessibility and availability);

## (b) details of key risks and limitations, if any, in generating the respective SFF files

## within the stipulated timeframes and on any date as required by PIDM;

## (c) where the development and/or maintenance of the system and any other

## processes related to the generation of the SFF are outsourced, to include details

## of the outsourcing arrangements such as the systems/processes outsourced and

## the name of the party(ies) involved. This includes third party service

## providers/vendors and/or other related/group entities; and

## (d) listing of reports for system reconciliation purposes (e.g. exception reports).

## 7.2 The documentation of the SFF generation process stipulated in paragraph 7 .1 shall be

## submitted to PIDM by 31 May of each assessment year (or the immediately preceding

## working day if 31 May falls on a weekend or a public holiday in Kuala Lumpur). Any

## updates shall be notified to PIDM in writing as and when they occur.


```
TITLE Guidelines on Deposit Information Systems and Submission
```
## 7.3 In the event of any proposed revisions to the SFF generation process (e.g. system or

## process enhancements) at the DTM, the DTM shall, prior to implementing any changes,

## communicate in writing to PIDM setting out an overview of the proposed change(s) and

## expected date of submission of the revised documentation.

## 7.4 The documentation of the SFF generation process and any revisions/updates must be

## approved by either the DTM’s CEO or CFO prior to submission to PIDM, with a cover letter

## as per the template provided in Appendix V. If there are no changes, DTM shall provide a

## declaration to PIDM by using the format as provided in Appendix VII, acknowledged by

## either the DTM’s CEO or the CFO.


```
TITLE Guidelines on Deposit Information Systems and Submission
```
## SECTION 8: NEW DEPOSIT-TAKING MEMBERS

## 8.1 A new DTM is required to make its first annual submission of SFF by 31 May of the

## assessment year immediately after the year in which it has commenced deposit-taking

## activities. Please see paragraph 4.2 for the requirements on the annual submission of SFF.

## 8.2 New DTMs are required to perform a testing of their trial deposit information in SFF with

## PIDM prior to the DTM’s first annual submission of SFF, or any other period as specified

## by PIDM. PIDM will facilitate the testing by providing the platform for the DTM to submit

## the trial deposit information in SFF to PIDM and the requirement to perform the testing

## will be communicated by PIDM as and when required.

## 8.3 As part of the testing requirements, PIDM may require the new DTMs to obtain an

## independent external assurance on the DTM’s deposit liability systems’ compliance with

## the requirements and capabilities as set out in Section 3 of these DISS Guidelines, as well

## as on the accuracy of the trial deposit information generated by the system for the

## testing.

## 8.4 The following are to be submitted to PIDM together with the trial deposit information in

## SFF:

## (a) certification by the CEO and CFO of the DTM on the DTM’s deposit liability

## systems’ compliance with the minimum requirements in these DISS Guidelines.

## The certification shall be in such manner as notified by PIDM during the testing;

## and

## (b) the documentation of the SFF generation process, as set out in Section 7 of these

## DISS Guidelines.

## Perbadanan Insurans Deposit Malaysia

## 22 February 2023


```
TITLE Guidelines on Deposit Information Systems and Submission
```
## Appendix I: PIDM’s Standard File Format

## The deposit information and other relevant information required to be submitted to PIDM in

## SFF are set out in the following SFF files:

## (a) Master file – Appendix I(a).

## This file consists of detailed financial and non-financial information of all deposit

## accounts categorised under customer deposits, as well as other relevant

## information.

## (b) Account Holder file – Appendix I(b).

## This file consists of details of all account holders. One account can contain

## multiple account holders, such as in the case of joint accounts and company

## accounts. Details of all account holders are required to be recorded.

## (c) Term deposit details file – Appendix I(c)

## This file contains details of term deposits with fixed maturity period such as fixed

## deposits (“FD”), general investment accounts (“GIA”), specific investment

## accounts (“SIA”), negotiable instruments of deposits (“NID”) and Islamic

## negotiable instruments (“INI”).

## (d) Beneficiary details file – Appendix I(d)

## This file contains details of beneficiaries of the trust accounts and is only

## applicable for trust accounts. Each beneficiary may be identified by their name or

## a unique identifier code. An account may have multiple beneficiaries, hence

## relevant details of all beneficiaries shall be recorded. Refer to paragraph 4.3 and

## 4.6 of these DISS Guidelines for the reporting requirements.

## (e) Addresses file – Appendix I(e)

## This file contains information on addresses for all accounts. For joint accounts,

## only the primary address needs to be provided.


```
TITLE Guidelines on Deposit Information Systems and Submission
```
## INSTRUCTIONS FOR SUBMISSION OF INFORMATION IN SFF

## 1. Data Cleansing

## The following data cleansing should be done:

## (a) Removal of salutation and title such as En., Mr., Datuk and Dr. in the name field

## in the Master File, Account Holder File, Beneficiary Table files; and

## (b) Removal of “-“ or any special character in the Identification number fields such as

## new identification card number, old identification card number, police/army

## identification card number, passport number, company/business registration

## number, birth certificate number etc.

## 2. Data Masking

## The masking algorithm that is adopted must result in a consistent transformation of

## masked data such that it is recognisable for aggregation purposes. For example, the

## masking algorithm could include the following:

## (a) The masked result of a numeric data should result in a numeric data e.g. 6=1, 4=5

## etc.; and

## (b) The masked result of an alphabetical data should result in an alphabetical data

## e.g. A=B, B=T etc.

## Therefore the following information “64AB” would be transformed into masked

## information of “15BT”.

## Note : The n umber “0” should not be masked and no alphabets or numbers should be

## masked to “0” or to any special characters (such as “&”, “#”, etc.).

## 3. File/batch naming convention

## DTMs are to adopt the following file/batch naming convention when submitting the SFF:

## BankCode NN YYYYMMDD ss nnn

## The DTM’s Bank

## Code

## File

## Type

## Date Submission status Batch serial

## number


```
TITLE Guidelines on Deposit Information Systems and Submission
```
## Of which;

## BankCode : The DTM’s Bank code (e.g. 0227 for Maybank)

## NN : The file type:

## 01: Master File

## 02: Account Holder file

## 03: Term deposit details file

## 04: Beneficiary details file

## 05: Addresses file

## YYYYMMDD : the record date (e.g. 20071231)

## ss : submission status

## 01 : first submission

## 02 : second submission (resubmission)

## ....... and so on.

## nnn : the batch serial number starting with 001

## Example batch no: 0227052007123101001 for first submission 0227052007123102001

## for second submission (resubmission).

## If DTMs are required to make a full resubmission, the batch number convention of the

## first submission should be adopted.

## 4. Splitting of SFF by batches

## DTMs should adopt the following file splitting convention:

## (a) DTMs are allowed to split the SFF into multiple batches;

## (b) The splitting should be done based on account name in alphabetical order or

## based on the account type (i.e. Individual Person, Individual Person – Joint,

## Individual Person – Trust, Sole Proprietorship, Partnership and Non-Individual

## Person and Non-Individual Person – Trust); and

## (c) All five SFF files (master file, account holder file, term deposit details file,

## beneficiary details file and addresses file) of the same record shall be submitted

## in the same batch (i.e. same serial batch number). For example, if the master file

## of account “A” is contained in batch 001 the rest of the information on account

## “A” contained in the other four (4) files should be located in same batch number

## 001.


```
TITLE Guidelines on Deposit Information Systems and Submission
```
## 5. Resubmission of SFF

## When an SFF is submitted to PIDM and is not accepted by PIDM, PIDM will provide an

## exception report for records that are rejected stating the reasons for the rejection. Upon

## receipt of the exception report, DTMs are required to:

## (a) for the purposes of annual SFF submission, resubmit the complete SFF using the

## first submission batch convention as set out in item 3 above (e.g.

## 0227052007123101001); or

## (b) for the purposes of readiness testing submission described in paragraph 4.5 of

## these DISS Guidelines, resubmit only the rejected records either by batch or by

## individual records basis.

## When resubmitting batches or individual records for the purposes of readiness testing or

## special examination, the DTM is required to resubmit the following SFF files of the related

## batch or transaction regardless of where the error is:

## • Master file as set out in Appendix I(a);

## • Account holder file as set out in Appendix I(b);

## • Term deposit details file as set out in Appendix I(c);

## • Beneficiary details file as set out in Appendix I(d); and

## • Addresses file as set out in Appendix I(e).

## The resubmission of SFF files has to use the original batch serial number with submission

## status identified as resubmission. Below is an example of the resubmission:

## e.g. First submission batch : 02270520071231 01 00 1

## Second submission (resubmission) : 02070520071231 02 00 1


```
TITLE Guidelines on Deposit Information Systems and Submission
```
### Appendix I(a): Master File

```
FILE SPECIFICATION
Name Master File - PIDM Standard File Format
File Description This is a batch file created by the DTM’s extraction program. It contains detailed financial and non-
financial data of all deposit accounts categorized under customer deposit, as well as other relevant
information.
File/batch Name BankCode01YYYYMMDDssnnn
BankCode = The DTM’s bank code (e.g. 0227 for Maybank)
01 = Master file
YYYYMMDD = the record date (e.g. 20071231)
ss = submission status (01= First submission, 02= second submission/resubmission)
nnn = the serial number starting with 001
```
```
e.g. 0227012007123101001
Format Text File (pipe delimited/separated)
Sample Transaction Header
Column Header
Transaction Record Account Number 1
Transaction Record Account Number 2
Transaction Record Account Number 3
Transaction Record Account Number 4
.....
Transaction Footer
```
```
Position
(column)
```
```
Field Description Type (A=alpha/ N=numeric) Mandatory field
Y=Yes,
N= No
```
```
Remarks
```
```
A Transaction Header
1 BATCH NUMBER AN Y refer to file/batch name
```
```
Position
(column)
```
```
Field Description
column header
```
```
Type (A=alpha/
N=numeric)/DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks Max
Length
```
```
Default
Value if
not
Available
```
```
Numeric
Type
```
```
B Transaction Record -
Account Number 1
1 ACCOUNT NUMBER
```
```
AccNum
```
```
AN Y 1) Full account number
(including product type +
branch code + running
number + check digit +
etc.) or;
2) Transaction Ref. No; or
3) Deal No.
```
```
NOTE:
This field value must be
unique. DTM shall combine
the account no/transaction
ref. no/deal no with other
field to ensure the
uniqueness of this field
value. E.g.: If an account
```
#### 50


```
TITLE Guidelines on Deposit Information Systems and Submission
```
**Position
(column)**

```
Field Description
column header
```
```
Type (A=alpha/
N=numeric)/DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks Max
Length
```
```
Default
Value if
not
Available
```
```
Numeric
Type
```
```
B Transaction Record -
Account Number 1
has multiple products or
currencies, DTM can
combine the account no
with "product type" value
or "currency" value).
2 BANKING BUSINESS
TYPE
```
```
BussType
```
```
N Y 1 = Islamic
2 = Conventional
```
```
int
```
#### 3 BRANCH CODE

```
BranchCode
```
```
AN Y Branch Code
```
```
NOTE:
If an account was
maintained at various
departments of the Head
Office (e.g. Treasury
Division), the DTM is to
assign the Head Office’s
branch code to the
account.
```
#### 20

#### 4 DEPOSIT / PRODUCT

#### TYPE

```
DepType
```
```
N Y 1 = Demand Deposit
2 = Savings Deposit
3 = Fixed deposit
4 = Specific Investment
5 = General Investment
6 = Commodity Murabahah
7 = Short Term Deposit
(inclusive of Money Market
Time Deposits)
8 = Bearer Deposit
9 = Negotiable Instrument
of Deposits / Islamic
Negotiable Instruments
10 = Repurchase
Agreement/Sell and Buy
Back Agreement
11 = Interbank Placement
12 = Investment Linked to
Derivatives Offered
/Structured Product
13 = Gold Investment
Account
14 = Silver Investment
Account
15 = Investment Account
99 = Other Deposits
Accepted
```
```
NOTE:
```
1. Unclaimed Monies which
has already been
transferred out from the
deposit liability systems
but yet to be submitted to
the Registrar of Unclaimed
Moneys, is to be
individually identified and
recorded back to the

```
int
```

```
TITLE Guidelines on Deposit Information Systems and Submission
```
**Position
(column)**

```
Field Description
column header
```
```
Type (A=alpha/
N=numeric)/DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks Max
Length
```
```
Default
Value if
not
Available
```
```
Numeric
Type
```
```
B Transaction Record -
Account Number 1
original product code and
deposit type for the
purpose of the SFF
reporting.
```
2. Product Types “ 8 ”, “ 9 ”,
“ 10 ”, “11”, “12”, “13”, “14”
and “99” may be non-
deposit items depending
on product features.
Product type “15” is a non-
deposit product
3. DTMs may contact PIDM
for additional deposit type
classes in the event any of
the deposit products does
not fall within any of the
deposit type classes set out
above.
5 CURRENCY

```
CurrencyCode
```
```
AN Y AED = Arab Emirates
Dirham
AUD = Australian Dollar
BDT = Bangladesh Taka
BND = Brunei Dollar
CAD = Canadian Dollar
CHF = Swiss Franc
CLP = Chilean Peso
CNH = Chinese Yuen traded
offshore
CNY = Chinese Renminbi
DKK = Danish Krone
EUR = Euro
GBP = Sterling Pound
HKD = Hong Kong dollar
IDR = Indonesian Rupiah
INR = Indian Rupee
JPY = Japanese Yen
KWD = Kuwait Dinar
LKR = Sri Lanka Rupee
MYR = Ringgit Malaysia
NOK = Norwegian Krone
NZD = New Zealand Dollar
PGK = Papua N Guinea Kina
PHP = Philippines Peso
PKR = Pakistan Rupee
QAR = Qatar Riyal
SAR = Saudi Riyal
SEK = Swedish Krona
SGD = Singapore Dollar
TWD = Taiwan Dollar
THB = Thai Baht
USD = US Dollar
XAU = Gold currency
ZAR = South Africa Rand
```
```
DTMs are to contact PIDM
for additional codes (if
required).
```
#### 10


```
TITLE Guidelines on Deposit Information Systems and Submission
```
**Position
(column)**

```
Field Description
column header
```
```
Type (A=alpha/
N=numeric)/DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks Max
Length
```
```
Default
Value if
not
Available
```
```
Numeric
Type
```
```
B Transaction Record -
Account Number 1
6 INSURABILITY
```
```
Insurability
```
```
N Y 1 = Insurable Deposits
2 = Non-Insurable
Deposits/Excluded
Deposits/Non Deposits
```
```
bit
```
#### 7 DEPOSIT PRODUCT

#### CODE

```
DepCode
```
```
AN Y The deposit product code
will be given by PIDM upon
product registration by
PIDM.
```
```
NOTE:
```
```
Default value of “0” may
only be applicable for
Product Types “ 8 ”, “ 9 ”,
“ 10 ”, “11”, “12”, “13”,
“14”, “15” and “99”.
```
```
Other Deposit/Product
Types must have a valid
product code as registered
with PIDM.
```
#### 50 0

#### 8 SPECIAL ACCOUNT

```
SpecialAcc
```
```
N Y 0 = Other account
1 = Pension Account
2 = Education Account
```
```
NOTE:
Value =1 or 2 for this field
is to be based on the
specific product offered by
the DTM to the customer,
such as Senior Saving
Account for pensioner or
Wadiah Savings Student
Account etc. Other than
the said value, to default to
"0".
```
```
0 int
```
#### 9 CUSTOMER

#### /ACCOUNT NAME

```
AccName
```
```
AN Y Name as stated in the
account - primary account
name for joint account.
```
#### 200

#### 10 CIF NO

```
CifNum
```
```
AN Y Customer's unique CIF
number. For joint account
please indicate the main
CIF number or the primary
CIF number.
```
```
NOTE:
DTM must ensure the
unique key no is generated
for the same customer
across the DTM's
"Deposit/Product Type"
under Field No = 4 (this is
also applicable to Interbank
Money Market Placement).
```
```
Refer to paragraph 3.1 of
these DISS Guidelines on
```
#### 100


```
TITLE Guidelines on Deposit Information Systems and Submission
```
**Position
(column)**

```
Field Description
column header
```
```
Type (A=alpha/
N=numeric)/DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks Max
Length
```
```
Default
Value if
not
Available
```
```
Numeric
Type
```
```
B Transaction Record -
Account Number 1
the requirement to
maintain unique reference
n umber for each depositor.
11 STAFF/ NON STAFF
```
```
StaffCode
```
```
N Y 1 = Staff
2 = Non Staff
0 = Information not
available
```
```
0 int
```
#### 12 ACCOUNT TYPE

```
AccType
```
```
N Y Code for each account
type:
1 = Individual Person
2 = Individual Person - Joint
3 = Individual Person -
Trust
4 = Sole Proprietorship
5 = Partnership
6 = Non-Individual Person
7 = Non-Individual Person -
Trust
```
```
Definitions of each account
type is as set out in
paragraph 3. 5 of these DISS
Guidelines.
```
```
int
```
#### 13 TEL NUMBER -

#### HOME

```
TelHome
```
```
AN Y State code and tel. no. 200 0
```
#### 14 TEL NUMBER -

#### OFFICE

```
TelOffice
```
```
AN Y State code and tel. no. 200 0
```
#### 15 TEL NUMBER - HP

```
TelHp
```
```
AN Y State code and tel. no.
```
(^)

#### 200 0

#### 16 REGISTRATION NO

```
RegNum
```
```
AN Y Mandatory for "Account
Type"= 4, 5, 6 and 7.
```
```
Default to "0" for "Account
Type" = 1, 2 and 3.
```
#### 50 0

#### 17 ACCOUNT OPENING

#### DATE

```
AccOpenDate
```
```
DT Y The date when the account
was originally opened.
YYYYMMDD
```
```
NOTE:
For old account where
DTM cannot trace back the
account opening date, the
field is to be defaulted to
“19000101”.
```
```
For account opening
effective 1st January 2013
onwards, DTM must ensure
that the information is
available for reporting to
PIDM.
```
#### 19000101


```
TITLE Guidelines on Deposit Information Systems and Submission
```
**Position
(column)**

```
Field Description
column header
```
```
Type (A=alpha/
N=numeric)/DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks Max
Length
```
```
Default
Value if
not
Available
```
```
Numeric
Type
```
```
B Transaction Record -
Account Number 1
18 APPROVER FOR
ACCOUNT OPENING
```
```
ApproverAccOpen
```
```
AN Y The staff code/id for
approver of account
opening.
```
```
NOTE:
```
```
Final approver for the
account opening. For old
account where DTM
cannot trace back the
Approver of the account
opening, the field is to be
defaulted to “0”.
```
```
For accounts opened via
straight-through processing
(STP) and auto-approved
by the system, the field is
to be defaulted/auto-
tagged to “system”
```
```
For account opening
effective 1st January 2013
onwards, DTM must ensure
that the information is
available for reporting to
PIDM.
```
#### 20 0

#### 19 RM LEDGER

#### BALANCE/

#### OUTSTANDING

#### DEPOSIT BALANCE

```
LedgerBal
```
```
N Y RM Ledger balance =
Outstanding balance
inclusive of cheque clearing
suspense (outward
clearing).
```
```
Amount defined to 2
decimal places. (e.g. 500.20
to denote five hundred and
twenty cents).
```
```
All applicable accounts
should be reported
regardless of positive or
negative balance. However,
account with negative
balance is to be reported
as "0" (zero) balance.
```
```
For foreign currency
account, the RM converted
amount shall be recorded
in this field.
```
```
0 money
```
#### 20 CURRENCY

#### EXCHANGE RATE

```
FxRate
```
```
N Y Exchange rate used vs RM
for the account.
```
```
1 unit foreign currency to
MYR at 10 decimal points.
```
```
Put "0" if not applicable.
```
```
0 Numeric
(22,10)
```

```
TITLE Guidelines on Deposit Information Systems and Submission
```
**Position
(column)**

```
Field Description
column header
```
```
Type (A=alpha/
N=numeric)/DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks Max
Length
```
```
Default
Value if
not
Available
```
```
Numeric
Type
```
```
B Transaction Record -
Account Number 1
21 FX LEDGER
BALANCE/
OUTSTANDING
DEPOSIT BALANCE
```
```
FxLedgerBal
```
```
N Y Ledger balance for foreign
currency account in the
original currency.
```
```
Ledger balance =
Outstanding balance
inclusive of cheque clearing
suspense (outward
clearing).
```
```
Amount defined to 2
decimal places. (e.g. 500.20
to denote five hundred and
twenty cents).
```
```
All applicable accounts
should be reported
regardless of positive or
negative balance. However,
account with negative
balance is to be reported
as "0" (zero) balance.
```
```
Put"0" if not applicable.
```
```
0 money
```
#### 22 RM AVAILABLE

#### DEPOSIT BALANCE

```
AvailableBal
```
```
N Y Ledger balance in column
19 less the float amount
(uncleared amount).
```
```
Amount defined to 2
decimal places. (e.g. 500.20
to denote RM Five hundred
and twenty cents).
```
```
All applicable accounts
should be reported
regardless of positive or
negative balance. However,
account with negative
balance is to be reported
as "0" (zero) balance.
```
```
Available balance arising
from Overdraft/financing
facilities should not be
included.
```
```
For foreign currency
account, the RM converted
amount shall be recorded
in this field.
```
```
Put"0" if not applicable.
```
```
0 money
```
#### 23 FX AVAILABLE

#### DEPOSIT BALANCE

```
FxAvailableBal
```
```
N Y Available balance for
foreign currency account in
the original foreign
currency.
```
```
Ledger balance in column
21 less the float amount
```
```
0 money
```

```
TITLE Guidelines on Deposit Information Systems and Submission
```
**Position
(column)**

```
Field Description
column header
```
```
Type (A=alpha/
N=numeric)/DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks Max
Length
```
```
Default
Value if
not
Available
```
```
Numeric
Type
```
```
B Transaction Record -
Account Number 1
(uncleared amount).
```
```
Amount defined to 2
decimal places. (e.g. 500.20
to denote Five hundred
and twenty cents).
```
```
All applicable accounts
should be reported
regardless of positive or
negative balance. However,
account with negative
balance is to be reported
as "0" (zero) balance.
```
```
Available balance arising
from Overdraft/financing
facilities should not be
included.
```
```
Put"0" if not applicable.
24 RM BILLS PAYABLE
OUTSTANDING
```
```
BillPayable
```
```
N Y Only bills payable
originated from debiting of
deposit account are to be
reported. Example -
debiting of current account
for purchase of bankers
draft.
```
```
For foreign currency
account, the RM converted
amount shall be recorded
in this field.
```
```
Put "0" if not applicable.
```
```
0 money
```
#### 25 FX BILLS PAYABLE

#### OUTSTANDING

```
FxBillPayable
```
```
N Y Only bills payable
originated from debiting of
deposit account are to be
reported. Such as debiting
of current account for
purchasing of bankers
draft, internet transfer via
IBG etc.
```
```
Put "0" if not applicable
```
```
0 money
```
#### 26 RM ACCRUED

#### INTEREST/DIVIDEND/

#### PROFIT

```
AccruedInt/Prof
```
```
N Y Interest/dividend/profit
accrued to the account but
not yet credited to
customers. Amount
defined to 2 decimal
places. (e.g. 500.20 to
denote RM Five hundred
and twenty cents).
```
```
For foreign currency
account, the RM converted
amount shall be recorded
in this field.
```
```
0 money
```

```
TITLE Guidelines on Deposit Information Systems and Submission
```
**Position
(column)**

```
Field Description
column header
```
```
Type (A=alpha/
N=numeric)/DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks Max
Length
```
```
Default
Value if
not
Available
```
```
Numeric
Type
```
```
B Transaction Record -
Account Number 1
```
```
Put "0" if not applicable.
```
```
Note: This figure can be
expressed in negative
value.
27 FX ACCRUED
INTEREST/DIVIDEND/
PROFIT
```
```
FxAccruedInt/Prof
```
```
N Y Interest/dividend/profit in
the original foreign
currency.
Interest/dividend/profit
accrued to the account but
not yet credited to
customers.
```
```
Amount defined to 2
decimal places. (e.g. 500.20
to denote five hundred and
twenty cents).
```
```
Put "0" if not applicable.
Note: This figure can be
expressed in negative
value.
```
```
0 money
```
#### 28 RM

#### INTEREST/DIVIDEND/

#### PROFIT PAID TODATE

```
Int/ProfTodate
```
```
N Y Interest/dividend/profit
accrued and paid (for the
year) to customer before
the account matured– i.e.
interim interest/dividend.
```
```
Amount defined to 2
decimal places. (e.g. 500.20
to denote RM five hundred
and twenty cents).
```
```
For foreign currency
account, the RM converted
amount shall be recorded
in this field.
```
```
Put "0" if not applicable.
```
```
0 money
```
#### 29 FX

#### INTEREST/DIVIDEND/

#### PROFIT PAID TODATE

```
FxInt/
ProfTodate
```
```
N Y Interest/dividend/profit
accrued and paid (for the
year) to customer before
the account matured– i.e.
interim interest/dividend.
```
```
Amount defined to 2
decimal places. (e.g. 500.20
to denote RM Five hundred
and twenty cents).
```
```
Put "0" if not applicable.
```
```
0 money
```
#### 30 TAGGING

```
Tagging
```
N Y (^0) None
1 If the account was
tagged as collateral
for loan/financing
facility
0 int


```
TITLE Guidelines on Deposit Information Systems and Submission
```
**Position
(column)**

```
Field Description
column header
```
```
Type (A=alpha/
N=numeric)/DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks Max
Length
```
```
Default
Value if
not
Available
```
```
Numeric
Type
```
```
B Transaction Record -
Account Number 1
2 Other tagging,
garnish, court
order, lien, AMLA
etc.
3 Deceased account
4 Deceased account
and tagged as
collateral for
loan/financing
facility
5 Deceased account
and other tagging,
garnish, court
order, lien, AMLA
etc^
31 CONDITION OF
TAGGING
```
```
CondOfTagging
```
```
AN Y Please indicate the loan
account number(s) and
specify details of tagging
under field 30 above.
```
```
Put "0" for accounts not
subject to tagging.
```
#### 50 0

#### 32 UNCLAIM MONIES

```
UclaimedMonies
```
```
N Y Whether the account is
categorized under
unclaimed monies
1 = YES
2 = NO
```
```
Note :
Relates to Unclaimed
Monies which has already
been transferred out from
the deposit liability
systems but has yet to be
submitted to the Registrar
of Unclaimed Money s.
```
```
bit
```
#### 33 RM NOMINAL VALUE

```
NominalValues
```
```
N Y The face value for the
NID/INI.
Amount defined to 2
decimal places. (e.g. 500.20
to denote RM five hundred
and twenty cents.
```
```
This is also applicable for
positive or negative value.
However, negative value is
to be reported as "0" zero.
```
```
For foreign currency
account, the RM converted
amount shall be recorded
in this field.
```
```
Put "0" if not applicable.
```
```
0 money
```

```
TITLE Guidelines on Deposit Information Systems and Submission
```
**Position
(column)**

```
Field Description
column header
```
```
Type (A=alpha/
N=numeric)/DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks Max
Length
```
```
Default
Value if
not
Available
```
```
Numeric
Type
```
```
B Transaction Record -
Account Number 1
34 FX NOMINAL VALUE
```
```
FxNominalValue
```
```
N Y The balance for foreign
currency account in the
original foreign currency.
```
```
The face value for NID/INI.
```
```
This is also applicable for
positive or negative value.
However, negative value is
to be reported as "0" zero.
```
```
Amount defined to 2
decimal places. (e.g. 500.20
to denote five hundred and
twenty cents).
```
```
Put "0" if not applicable.
```
```
0 money
```
#### 35 RM PROCEED VALUE

```
ProceedValue
```
```
N Y Proceed value for NID/INI
as at report date.
```
```
Amount defined to 2
decimal places. (e.g. 500.20
to denote RM five hundred
and twenty cents).
```
```
This is also applicable for
positive or negative value.
However, negative value is
to be reported as "0" zero.
```
```
For foreign currency
account, the RM converted
amount shall be recorded
in this field.
```
```
Put "0" if not applicable.
```
```
The same value under this
field is also to be reported
in Field 19.
```
```
0 money
```
#### 36 FX PROCEED VALUE

```
FxProceedValue
```
```
N Y The balance for foreign
currency account in the
original foreign currency.
```
```
Proceed value for NID/INI
as at report date.
```
```
This is also applicable for
positive or negative value.
However, negative value is
to be reported as "0".
```
```
Amount defined to 2
decimal places. (e.g. 500.20
to denote five hundred and
twenty cents).
```
```
Put "0" if not applicable.
```
```
0 money
```

```
TITLE Guidelines on Deposit Information Systems and Submission
```
**Position
(column)**

```
Field Description
column header
```
```
Type (A=alpha/
N=numeric)/DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks Max
Length
```
```
Default
Value if
not
Available
```
```
Numeric
Type
```
```
B Transaction Record -
Account Number 1
The same value under this
field is also to be reported
in field 21.
37 ATM CARD
```
```
AtmCard
```
N Y (^1) ATM only
2 ATM & Internet
Banking
3 Internet Banking
only
4 No ATM & Internet
Banking
Note:
ATM refers to ATM cards as
well as Debit Cards that
allow for withdrawals via
the ATM.
Internet banking refers to
facilities available to
depositors to access their
deposit accounts on real
time basis.
int
**Position
(column)
Field Description
Type (A=alpha/
N=numeric)
Mandatory field
Y=Yes,
N= No
Remarks
C Transaction Footer**
1 TOTAL NUMBER OF
TRANSACTION
N Y Total number of accounts for the file.
(^)
2 TOTAL AMOUNT N Y Total amount. I.e. the sum total of RM ledger balance/
outstanding balance for the total records (column 19)
Amount defined to 2 decimal places. (e.g. 500.20 to
denote five hundred and twenty cents.


```
TITLE Guidelines on Deposit Information Systems and Submission
```
### Appendix I(b): Account Holder File

#### FILE SPECIFICATION

```
Name Account Holder - PIDM Standard File Format
File Description This is a batch file created by the DTM’s extraction program. It contains details of account holders for all accounts
as per the Master File. One account can have multiple account holders, hence all account holders' details are
required to be recorded
```
```
Note:
1) For records with “Account Type” 1, 2, 3, (Individual Person, Individual Person - Joint and Individual Person
```
**- Trust) the details of the account holders must be reported in account holder file. At least one of field no
6 - 9 should have value other than “0”.**

```
2) For records with “Account Type” 4, 5, 6 and 7 (Sole Proprietorship, Partnership, Non-Individual Person and
Non Individual Person - Trust), only fields no 1 and 2 of Account Holder File are mandatory. Other fields
can be defaulted to “0” if the information is not available.
File/batch Name BankCode02YYYYMMDDssnnn
```
```
BankCode = The DTM’s bank code (e.g. 0227 for Maybank)
02 = Account Holder file
YYYYMMDD = the record date (e.g. 20071231)
ss = submission status (01= First submission, 02= second submission/resubmission)
nnn = the batch serial number starting with 001
```
```
e.g.,
0227022007123101001
Format Text File (pipe delimited/separated)
Sample Transaction Header
Column Header
Transaction Record Account Number 1
Transaction Record Account Number 2
Transaction Record Account Number 3
Transaction Record Account Number 4
.....
Transaction Footer
```
```
Position
(column)
```
```
Field Description Type (A=alpha/
N=numeric)
```
```
Mandatory field Y=Yes,
N= No
```
```
Remarks
```
```
A Transaction Header
1 BATCH NUMBER AN Y refer to file/batch name
```
```
Position
(column)
```
```
Field Name
Column Header
```
```
Type
(A=alpha/
N=numeric)/
DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks
Max
Length
```
```
Default
Value if
not
Available
```
```
Numeric
Type
```
```
B Transaction Record
```
**- Account Number
1**

```
1 ACCOUNT NUMBER
```
```
AccNum
```
```
AN Y Account number/ Transaction ref
No/ Deal No. link to master file.
```
#### 50

#### 2 ACCOUNT NAME

```
AccName
```
```
AN Y Name as stated in the account - link
to master file e.g.: ABC Holding,
Muhammad Bin Ali etc.....
```
#### 200


```
TITLE Guidelines on Deposit Information Systems and Submission
```
**Position
(column)**

```
Field Name
Column Header
```
```
Type
(A=alpha/
N=numeric)/
DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks
Max
Length
```
```
Default
Value if
not
Available
```
```
Numeric
Type
```
```
B Transaction Record
```
**- Account Number
1**

#### 3 AC HOLDER CIF NO

```
CifNum
```
```
AN Y Customer's unique CIF number. For
joint accounts please indicate the
main CIF number or the primary CIF
number.
```
#### 100 0

#### 4 HOLDERS NAME

```
HolderName
```
```
AN Y Name of the person holding the
account or the account signatories.
e.g. Muhammad Bin Abdullah. For
non- person account such as
company, association etc., name of
the account holders/signatories
should be presented in this file.
```
#### 200 0

#### 5 HOLDER'S

#### SALUTATION

```
Salutation
```
```
AN Y E.g. Encik, Mr, Tuan, Datuk, Tan Sri
etc.
```
#### 50 0

#### 6 NEW NRIC

#### NUMBER

```
NewIdNum
```
```
AN Y Mandatory for Account Types 1, 2
and 3.
```
```
NRIC no of the account holder
```
```
Dashes in between NRIC number are
required to be removed. (e.g.
820902 - 05 - 5811 = 820902055811).
```
```
Put "0" if not applicable.
```
#### 20 0

#### 7 OLD NRIC NUMBER

```
OldIdNum
```
```
AN Y Old NRIC no of the account holder.
```
```
Put "0" if not applicable.
```
#### 20 0

#### 8 POLICE/

#### ARMY IC NO

```
Police/ArmyIdNum
```
```
AN Y If the account holder is police or
army.
```
```
Put "0" if not applicable.
```
#### 20 0

#### 9 PASSPORT

#### NUMBER

```
PassportNum
```
```
AN Y Mandatory for non-residents.
```
```
Put "0" if not applicable.
```
#### 50 0

#### 10 RESIDENT/ NON-

#### RESIDENT

```
Resident
```
```
N Y 1 = Resident
2 = Non resident
0 = Information not available
```
#### 0

#### 11 DATE OF BIRTH

```
DateOfBirth
```
#### DT Y YYYYMMDD 19000101

#### 12 GENDER

```
Gender
```
```
N Y 1 = Male
2 = Female
0 = Information not available
```
```
0 int
```
#### 13 PASSPORT

#### COUNTRY OF

#### ISSUANCE

```
CountryIssuance
```
```
AN Y Mandatory for non-resident.
```
```
Refer to this list for the ALPHA- 3
Country codes
```
#### 50 0


```
TITLE Guidelines on Deposit Information Systems and Submission
```
**Position
(column)**

```
Field Name
Column Header
```
```
Type
(A=alpha/
N=numeric)/
DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks
Max
Length
```
```
Default
Value if
not
Available
```
```
Numeric
Type
```
```
B Transaction Record
```
**- Account Number
1**

```
https://www.iso.org/obp/ui/#search
```
```
Example : JPN (for Japan), SGP (for
Singapore), IDN (for Indonesia)
```
```
Put "0" if not applicable.
```
```
Position
(column)
```
```
Field Description Type (A=alpha/
N=numeric)
```
```
Mandatory field
Y=Yes,
N= No
```
```
Remarks
```
```
C Transaction Footer
```
#### 1 TOTAL NUMBER OF

#### TRANSACTION

```
N Y Total number of account holder for the
file.
```

```
TITLE Guidelines on Deposit Information Systems and Submission
```
### Appendix I(c): Term Deposit Details File

#### FILE SPECIFICATION

```
Name Term Deposit Details - PIDM Standard File Format
File Description This is a batch file created by the DTM’s extraction program. It contains details of term deposits with fixed maturity
period such as:
```
- Fixed Deposits (“FD”)
- Negotiable Instrument of Deposits /Islamic Negotiable Instruments (“NID/INI”)
- General Investment Accounts (“GIA”)
-^ Specific Investment Accounts^ (“SIA”)^
**File/batch Name BankCode03YYYYMMDDssnnn**

```
BankCode = The DTM’s bank code (e.g. 0227 for Maybank)
03 = Term deposit file
YYYYMMDD = the record date (e.g. 20071231)
ss = submission status (01= First submission, 02= second submission/resubmission)
nnn = the batch serial number starting with 001
```
```
e.g. 0227032007123101001
Format Text File (pipe delimited/separated)
Sample Transaction Header
Column Header
Transaction Record Account Number 1
Transaction Record Account Number 2
Transaction Record Account Number 3
Transaction Record Account Number 4
.....
Transaction Footer
```
```
Position
(column)
Field Description Type (A=alpha/ N=numeric) Mandatory field Y=Yes, N= No Remarks
```
```
A Transaction Header
1 BATCH NUMBER AN Y refer to file/batch name
```
```
Position
(column)
```
```
Field Name
Column Header
```
```
Type
(A=alpha/
N=numeri
c)/
DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks
Max
Length
```
```
Default
Value if
Not
Available
```
```
Numeric
Type
```
```
B Transaction Record -^
Account Number 1
1 ACCOUNT NUMBER
```
```
AccNum
```
```
AN Y Account number/ Transaction ref
No/ Deal No. link to master file.
```
#### 50

#### 2 CURRENCY

```
Currency
Code
```
```
AN Y AED =Arab Emirates Dirham
AUD =Australian Dollar
BDT =Bangladesh Taka
BND =Brunei Dollar
CAD =Canadian Dollar
CHF =Swiss Franc
CLP = Chilean Peso
CNH = Chinese Yuen traded
offshore
CNY =Chinese Renminbi
DKK =Danish Krone
```
#### 10


```
TITLE Guidelines on Deposit Information Systems and Submission
```
**Position
(column)**

```
Field Name
Column Header
```
```
Type
(A=alpha/
N=numeri
c)/
DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks
Max
Length
```
```
Default
Value if
Not
Available
```
```
Numeric
Type
```
#### B

```
Transaction Record -
Account Number 1
EUR =Euro
GBP =Sterling Pound
HKD =Hong Kong dollar
IDR =Indonesian Rupiah
INR =Indian Rupee
JPY =Japanese Yen
KWD = Kuwait Dinar
LKR =Sri Lanka Rupee
MYR =Ringgit Malaysia
NOK =Norwegian Krone
NZD =New Zealand Dollar
PGK =Papua N Guinea Kina
PHP =Philippines Peso
PKR =Pakistan Rupee
QAR =Qatar Riyal
SAR =Saudi Riyal
SEK =Swedish Krona
SGD =Singapore Dollar
TWD =Taiwan Dollar
THB =Thai Baht
USD =US Dollar
XAU =Gold currency
ZAR =South Africa Rand
```
```
DTMs are to contact PIDM for
additional codes (if required).
3 CERTIFICATE NO
```
```
CertNum
```
```
AN N Only applicable to FD, GIA, SIA
and the like. - If any.
```
```
Put "0" if not applicable.
```
#### 38 0

#### 4 ACCOUNT OPENING

#### DATE

```
AccOpeningDate
```
```
DT Y The date when the account was
originally opened - YYYYMMDD
```
```
NOTE:
For old account where DTM
cannot trace back the account
opening date, the field is to be
defaulted to “19000101”.
```
```
For account opening effective 1st
January 2013 onwards, DTM must
ensure that the information is
available for reporting to PIDM.
```
#### 19000101

#### 5 RM NOMINAL VALUE

```
NominalValue
```
```
N Y The face value for the NID/INI.
```
```
For foreign currency account, the
RM converted amount shall be
recorded in this field.
```
```
This is also applicable for positive
or negative value. However,
negative value is to be reported
as "0" zero.
```
```
Put "0" if not applicable.
```
```
0 money
```

```
TITLE Guidelines on Deposit Information Systems and Submission
```
**Position
(column)**

```
Field Name
Column Header
```
```
Type
(A=alpha/
N=numeri
c)/
DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks
Max
Length
```
```
Default
Value if
Not
Available
```
```
Numeric
Type
```
#### B

```
Transaction Record -
Account Number 1
6 FX NOMINAL VALUE
```
```
FxNominalValue
```
```
N Y For the foreign currency account
in the original foreign currency.
```
```
The face value for the NID/INI.
```
```
This is also applicable for positive
or negative value. However,
negative value is to be reported
as "0" zero.
```
```
Put "0" if not applicable.
```
```
0 money
```
#### 7 RM LEDGER BALANCE/

#### OUTSTANDING DEPOSIT

#### BALANCE

```
LedgerBal
```
```
N Y RM Ledger balance = Outstanding
balance inclusive of cheque
clearing suspense (outward
clearing). Amount defined to 2
decimal places. (e.g. 500.20 to
denote five hundred and twenty
cents).
```
```
All applicable accounts should be
reported regardless of positive or
negative balance. However,
account with negative balance is
to be reported as "0" (zero)
balance.
```
```
For foreign currency account, the
RM converted amount shall be
recorded in this field.
```
```
Put "0" if not applicable.
```
```
0 money
```
#### 8 FX LEDGER BALANCE/

#### OUTSTANDING DEPOSIT

#### BALANCE

```
FxLedgerBal
```
```
N Y Ledger balance for foreign
currency account in the original
currency.
```
```
Ledger balance = Outstanding
balance inclusive of cheque
clearing suspense (outward
clearing).
```
```
Amount defined to 2 decimal
places. (e.g. 500.20 to denote five
hundred and twenty cents).
```
```
All applicable accounts should be
reported regardless of positive or
negative balance. However,
account with negative balance is
to be reported as "0" (zero)
balance.
```
```
Put "0" if not applicable.
```
```
0 money
```
#### 9 RM AVAILABLE DEPOSIT

#### BALANCE

```
AvailableBal
```
```
N Y Ledger balance in items 7 less the
float amount (uncleared
amount).
```
```
0 money
```

```
TITLE Guidelines on Deposit Information Systems and Submission
```
**Position
(column)**

```
Field Name
Column Header
```
```
Type
(A=alpha/
N=numeri
c)/
DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks
Max
Length
```
```
Default
Value if
Not
Available
```
```
Numeric
Type
```
#### B

```
Transaction Record -
Account Number 1
Amount defined to 2 decimal
places. (e.g. 500.20 to denote RM
Five hundred and twenty cents).
```
```
All applicable accounts should be
reported regardless of positive or
negative balance. However,
account with negative balance is
to be reported as "0" (zero)
balance.
```
```
Available balance arising from
Overdraft/financing facilities
should not be included.
```
```
For foreign currency account, the
RM converted amount shall be
recorded in this field.
```
```
Put "0" if not applicable.
10 FX AVAILABLE DEPOSIT
BALANCE
```
```
FxAvailableBal
```
```
N Y Available balance for foreign
currency account in the original
foreign currency.
```
```
Ledger balance in field 8 less the
float amount (uncleared
amount).
```
```
Amount defined to 2 decimal
places. (e.g. 500.20 to denote
Five hundred and twenty cents).
```
```
All applicable accounts should be
reported regardless of positive or
negative balance.
However, account with negative
balance is to be reported as "0"
(zero) balance.
```
```
Available balance arising from
Overdraft/financing facilities
should not be included.
```
```
Put "0" if not applicable
```
```
0 money
```
#### 11 PLACEMENT DATE/

#### RENEWAL/ISSUE DATE

```
Placement/RenewDate
```
```
DT Y Referring to placement effective
date. Applicable to FD/GIA/SIA
e.g. YYYYMMDD.
```
#### 19000101

#### 12 MATURITY DATE

```
MaturityDate
```
```
DT Y Applicable to fixed FD/GIA/SIA
e.g. YYYYMMDD.
```
#### 19000101

#### 13 TENOR

```
Tenor
```
```
N Y Applicable to FD/GIA/SIA in
number of days.
```
```
0 int
```

```
TITLE Guidelines on Deposit Information Systems and Submission
```
**Position
(column)**

```
Field Name
Column Header
```
```
Type
(A=alpha/
N=numeri
c)/
DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks
Max
Length
```
```
Default
Value if
Not
Available
```
```
Numeric
Type
```
#### B

```
Transaction Record -
Account Number 1
14 INTEREST RATE / NET
GIA RATE /YIELD
```
```
Rate/NetGiaRate
```
```
N Y Applicable to interest bearing
deposit up to 5 decimal point
(e.g. 4.444% is denoted as
0.04444).
```
```
Also applicable to Islamic banking
rates where FI using net rate in
the system.
```
```
Put "0" if not applicable.
```
```
0 Numeric
(10,5)
```
#### 15 GROSS RATE

```
GrossRate
```
```
N N Applicable to Islamic deposits
where DTM uses gross return and
profit-sharing ratios in calculating
dividends, up to 5 decimal point
(e.g. 4.444% is denoted as
0.04444).
```
```
If DTM is using this rate, the
profit-sharing ratio (deposits
portion) should be recorded in
field 16.
```
```
Put "0" if not applicable.
```
```
0 Numeric
(10,5)
```
#### 16 PROFIT SHARING

#### RATIOS – (CUSTOMER

#### PORTION)

#### PSR

```
N N Applicable to Islamic deposits
where DTM uses gross return
(Field No. 15) and profit-sharing
ratios (PSR) in calculating
dividends. Up to 5 decimal points
E.g. 0.70000 refer to PSR of 70:30
(customer: bank respectively).
```
```
Put "0" if not applicable.
```
```
0 Numeric
(10,5)
```
#### 17 RM ACCRUED

#### INTEREST/DIVIDEND/

#### PROFIT

```
AccruedInt/Prof
```
```
N Y Interest/dividend/profit accrued
to the account but not yet
credited to customers. Amount
defined to 2 decimal places. (e.g.
500.20 to denote RM five
hundred and twenty cents).
```
```
For foreign currency account, the
RM converted amount shall be
recorded in this field.
```
```
Put "0" if not applicable.
```
```
Note: This figure can be
expressed in negative value.
```
```
0 money
```
#### 18 FX ACCRUED

#### INTEREST/DIVIDEND/

#### PROFIT

```
FxAccruedInt/Prof
```
```
N Y The balance for foreign currency
account in the original foreign
currency.
```
```
Interest/dividend/profit accrued
to the account but not yet
credited to customers. Amount
defined to 2 decimal places. (e.g.
500.20 to denote five hundred
and twenty cents).
```
```
0 money
```

```
TITLE Guidelines on Deposit Information Systems and Submission
```
**Position
(column)**

```
Field Name
Column Header
```
```
Type
(A=alpha/
N=numeri
c)/
DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks
Max
Length
```
```
Default
Value if
Not
Available
```
```
Numeric
Type
```
#### B

```
Transaction Record -
Account Number 1
```
```
Put "0" if not applicable.
```
```
Note: This figure can be
expressed in negative value.
19 RM
INTEREST/DIVIDEND/
PROFIT PAID TODATE
```
```
Int/ProfPdTodate
```
```
N Y Interest/dividend/profit accrued
and paid (for the year) to
customer before the account
matured– i.e. interim
interest/dividend.
```
```
Amount defined to 2 decimal
places. (e.g. 500.20 to denote RM
five hundred and twenty cents).
```
```
For foreign currency account, the
RM converted amount shall be
recorded in this field.
```
```
Put "0" if not applicable.
```
```
0 money
```
#### 20 FX INTEREST/DIVIDEND/

#### PROFIT PAID TODATE

```
FxInt/ProfPd
Todate
```
```
N Y The balance for foreign currency
account in the original foreign
currency.
```
```
Interest/dividend/profit accrued
and paid to customer for the year
before the account matured– i.e.
interim interest/dividend.
```
```
Amount defined to 2 decimal
places. (e.g. 500.20 to denote five
hundred and twenty cents).
```
```
Put "0" if not app licable.
```
```
0 money
```
#### 21 RM PROCEED VALUE

```
ProceedValue
```
```
N Y Proceed value for NID/INI as at
report date.
```
```
Amount defined to 2 decimal
places. (e.g. 500.20 to denote RM
five hundred and twenty cents).
```
```
This is also applicable for positive
or negative value. However,
negative value is to be reported
as "0" zero.
```
```
For foreign currency account, the
RM converted amount shall be
recorded in this field.
```
```
The same value is to be reported
in field 7.
```
```
Put "0" if not applicable.
```
```
0 money
```

```
TITLE Guidelines on Deposit Information Systems and Submission
```
**Position
(column)**

```
Field Name
Column Header
```
```
Type
(A=alpha/
N=numeri
c)/
DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks
Max
Length
```
```
Default
Value if
Not
Available
```
```
Numeric
Type
```
#### B

```
Transaction Record -
Account Number 1
22 FX PROCEED VALUE
```
```
FxProceedValue
```
```
N Y The balance for foreign currency
account in the original foreign
currency.
```
```
Proceed value for NID/INI as at
report date.
```
```
Amount defined to 2 decimal
places. (e.g. 500.20 to denote five
hundred and twenty cents).
```
```
This is also applicable for positive
or negative value. However,
negative value is to be reported
as "0" zero.
```
```
The same value is to be reported
at Field 8.
```
```
Put "0" if not applicable.
```
```
0 money
```
#### 23 LAST

#### INTEREST/DIVIDEND/

#### PROFIT PAYMENT DATE

```
LastInt/DivPmt
```
```
DT Y The date where the interim
interest/dividend was credited to
the account. YYYYMMDD.
```
```
Put "0" if not applicable.
```
#### 19000101

```
Position
(column)
Field Description
Type (A=alpha/
N=numeric)
```
```
Mandatory
field
Y=Yes, N= No
```
```
Remarks
```
```
C Transaction Footer
1 TOTAL NUMBER OF
TRANSACTION
```
```
N Y Total number of accounts for the file.
```
```
2 TOTAL AMOUNT N Y Total amount. I.e. the sum total of RM ledger balance/
outstanding balance for the total record (column 7).
```
```
Amount defined to 2 decimal places. (e.g. 500.20 to
denote Five hundred and twenty cents)
```

```
TITLE Guidelines on Deposit Information Systems and Submission
```
### Appendix I(d): Beneficiary File

#### FILE SPECIFICATION

```
File Name Beneficiary Details for Trust Account
File Description This is a batch file created by the DTM's extraction program. It contains details of beneficiaries of trust
accounts. This file is only applicable for trust accounts. An account may have multiple beneficiaries,
hence all beneficiaries' details are required to be recorded. For trust account that does not have
beneficiary list, the record is not required to be reflected in this file.
File/batch Name BankCode04YYYYMMDDssnnn
```
```
BankCode = The DTM’s bank code (e.g. 0227 for Maybank)
04 = Trust beneficiary file
YYYYMMDD = the record date (e.g. 20071231)
ss = submission status (01= First submission, 02= second submission/ resubmission)
nnn = the serial number start with 001
```
```
e.g.,
```
(^0227042007123101001)
**Format** Text File (pipe delimited/separated)
**Sample Transaction Header
Column Header**
Transaction Record Account Number 1
Transaction Record Account Number 2
Transaction Record Account Number 3
Transaction Record Account Number 4
**.....
Transaction Footer
Position
(column)
Field Description
Type (A=alpha/
N=numeric)
Mandatory field
Y=Yes,
N= No
Remarks**

#### A

```
Transaction
Header
1 BATCH NUMBER AN Y refer to file/batch
name.
```
```
Position
(column)
```
```
Field Name
Column Header
```
```
Type
(A=alpha/
N=numeric)/
DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks
Max
Length
```
```
Default
Value if
Not
Available
```
```
Numeric Type
```
#### B

```
Transaction
Record -
Account
Number 1
1 ACCOUNT
NUMBER
AccNum
```
```
AN Y Account number/
Transaction ref No/ Deal
No. link to master file.
```
#### 50

#### 2 CURRENCY

```
CurrencyCode
```
```
AN Y AED =Arab Emirates Dirham
AUD =Australian Dollar
BDT =Bangladesh Taka
BND =Brunei Dollar
CAD =Canadian Dollar
CHF =Swiss Franc
CLP = Chilean Peso
```
#### 10


```
TITLE Guidelines on Deposit Information Systems and Submission
```
**Position
(column)**

```
Field Name
Column Header
```
```
Type
(A=alpha/
N=numeric)/
DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks Max
Length
```
```
Default
Value if
Not
Available
```
```
Numeric Type
```
#### B

```
Transaction
Record -
Account
Number 1
CNH = Chinese Yuen traded
offshore
CNY =Chinese Renminbi
DKK =Danish Krone
EUR =Euro
GBP =Sterling Pound
HKD =Hong Kong dollar
IDR =Indonesian Rupiah
INR =Indian Rupee
JPY =Japanese Yen
KWD = Kuwait Dinar
LKR =Sri Lanka Rupee
MYR =Ringgit Malaysia
NOK =Norwegian Krone
NZD =New Zealand Dollar
PGK =Papua N Guinea Kina
PHP =Philippines Peso
PKR =Pakistan Rupee
QAR =Qatar Riyal
SAR =Saudi Riyal
SEK =Swedish Krona
SGD =Singapore Dollar
TWD =Taiwan Dollar
THB =Thai Baht
USD =US Dollar
XAU =Gold currency
ZAR =South Africa Rand
```
```
DTMs are to contact PIDM
for additional codes (if
required).
3 CUSTOMER
/ACCOUNT
NAME
```
```
AccName
```
```
AN Y Name as stated in the
account - link to master file.
```
#### 200

#### 4 BENEFICIARY

#### NAME/ CODE

```
Beneficiary
Name
```
```
AN Y Beneficiary name or code. 200
```
#### 5 BENEFICIARY ID

```
BeneficiaryID
```
```
AN Y Beneficiary ID- (NRIC
number, passport no., birth
certificate number, etc.) as
provided by Trustee.
```
#### 50 0

#### 6 BENEFICIARY

#### ADDRESS

```
Beneficiary
Add
```
```
AN Y Beneficiary Address
provided by the Trustee.
```
#### 500 0


```
TITLE Guidelines on Deposit Information Systems and Submission
```
**Position
(column)**

```
Field Name
Column Header
```
```
Type
(A=alpha/
N=numeric)/
DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks Max
Length
```
```
Default
Value if
Not
Available
```
```
Numeric Type
```
#### B

```
Transaction
Record -
Account
Number 1
7 RATIO OF
BENEFICIARY
INTEREST
```
```
BeneficiaryInt
```
```
N Y Applicable to trust a/c only.
Up to 10 decimal points
(e.g. 4. 12345678 % is
denoted as 0. 0412345678 ).
```
```
Total sum of % for one
account should be within
0.02% tolerance limit (i.e.
between 0.9998 and
1.0002).
```
```
Numeric
( 15 , 10 )
```
**Position
(column)
Field Description
Type (A=alpha/
N=numeric)**

```
Mandatory field
Y=Yes,
N= No
```
```
Remarks
```
```
C Transaction Footer
```
#### 1 TOTAL NUMBER OF

#### TRANSACTION

```
N Y Total number of beneficiary for the
file.
```

```
TITLE Guidelines on Deposit Information Systems and Submission
```
### Appendix I(e): Address File

#### FILE SPECIFICATION

```
File Name Address Details - PIDM Standard File Format
File Description This is a batch file created by the DTM's extraction program. It contains details of addresses for all accounts. For joint
accounts, only primary address need to be presented and one account should only have one address.
File/batch Name BankCode05YYYYMMDDssnnn
```
```
BankCode = The DTM’s Bank code (e.g. 0227 for Maybank)
05 = Address file
YYYYMMDD = the record date (e.g. 20071231)
ss = submission status (01= First submission, 02= second submission/resubmission)
nnn = the serial number start with 001
```
```
e.g.,
0227052007123101001
Format Text File (pipe delimited/separated)
Sample Transaction Header
Column Header
Transaction Record Account Number 1
Transaction Record Account Number 2
Transaction Record Account Number 3
Transaction Record Account Number 4
.....
Transaction Footer
```
```
Position
(column)
Field Description Type (A=alpha/ N=numeric)
```
```
Mandatory field
Y=Yes,
N= No
```
```
Remarks
```
```
A Transaction Header
1 BATCH NUMBER AN Y refer to file/batch name
```
```
Position
(column)
```
```
Field Name
Column Header
```
```
Type
(A=alpha/
N=numeric)/
DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks Max
Length
```
```
Default
Value if
Not
Available
```
```
Numeric
Type
```
#### B

```
Transaction Record -
Account Number 1
1 ACCOUNT NUMBER
```
```
AccNum
```
```
AN Y Account number/ Transaction ref
No/ Deal No. link to master file.
```
#### 50

#### 2 RESIDENTIAL

#### ADDRESS LINE 1

```
ResidentAdd1
```
```
AN Y Residential/permanent/registered
address.
```
#### 200 0

#### 3 RESIDENTIALADDRESS

#### LINE 2

```
ResidentAdd2
```
```
AN Y Residential address. 200 0
```

```
TITLE Guidelines on Deposit Information Systems and Submission
```
**Position
(column)**

```
Field Name
Column Header
```
```
Type
(A=alpha/
N=numeric)/
DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks Max
Length
```
```
Default
Value if
Not
Available
```
```
Numeric
Type
```
#### B

```
Transaction Record -
Account Number 1
4 RESIDENTIAL
ADDRESS LINE 3
```
```
ResidentAdd3
```
```
AN Y Residential/permanent/registered
address –Town.
```
#### 50 0

#### 5 RESIDENTIAL

#### ADDRESS LINE 4

```
ResidentAdd4
```
```
AN Y Residential/permanent/registered
address - State, Country.
```
#### 50 0

#### 6 POSTCODE

```
Postcode
```
```
AN Y Postcode. 20 0
```
#### 7 MAILING ADDRESS

#### LINE 1

```
MailAdd1
```
```
AN Y Mailing address. 200 0
```
#### 8 MAILING ADDRESS

#### LINE 2

```
MailAdd2
```
```
AN Y Mailing address. 200 0
```
#### 9 MAILING ADDRESS

#### LINE 3

```
MailAdd3
```
```
AN Y Mailing address – Town. 50 0
```
#### 10 MAILING ADDRESS

#### LINE 4

```
MailAdd4
```
```
AN Y Mailing address - State, Country. 50 0
```
#### 11 POSTCODE

```
Postcode
```
```
AN Y Postcode. 20 0
```
```
Position
(column)
Field Description
Type (A=alpha/
N=numeric)
```
```
Mandatory field
Y=Yes, N= No
Remarks
```
```
C Transaction Footer
1 TOTAL NUMBER OF
TRANSACTION
```
```
N Y Total number of accounts for the
file.
```

```
TITLE Guidelines on Deposit Information Systems and Submission
```
### Appendix I(f): Financial Replacement File Format

#### FILE SPECIFICATION

```
Name Financial Replacement - PIDM Standard File Format
File Description 1. This is a batch file created by DTM based on data from the deposit source system and/or the data
warehouse.
```
2. The replacement file is not required to be submitted for annual SFF submission.
3. The file is to be submitted to PIDM when PIDM requires DTM to submit their data via SFF for readiness
    testing purpose, special examination and/or reimbursement, if required.

(^)
**File/batch Name BankCodefinrepYYYYMMDDSSSSnnn**
BankCode = The DTM’s bank code (e.g. 0227 for Maybank)
finrep = to denote "financial replacement file".
YYYYMMDD = the record date (e.g. 20071231) need to be adjusted
SSSS = the assigned serial number (e.g. 0001, 0002 etc.) for each deposit source system.
Serial number and details of the deposit source system must be documented in
the SFF Generation Process documentation.
nnn = the serial number start with 001
e.g.: 0227finrep2 00712310001001
(^)
**Format** Text File (pipe delimiters)
**Sample Transaction Header
Column Header**
Transaction Record Account Number 1
Transaction Record Account Number 2
Transaction Record Account Number 3
Transaction Record Account Number 4
**.....
Position
(column)
Field Description Type (A=alpha/ N=numeric)
Mandatory field
Y=Yes,
N= No
Remarks
A Transaction Header**
1 BATCH NUMBER AN Y refer to file/batch name
**Position
(column)
Field Name
Column Header
Type
(A=alpha/
N=numeric)/
DT=Date
Mandatory
field
Y=Yes,
N= No
Remarks
Max
Length
Default
Value if
Not
Available
Numeric Type**

#### A

```
Transaction Record -
Account Number 1
1 ACCOUNT NUMBER
```
```
AccNum
```
```
AN Y Account number/
Transaction ref No/
Deal No. as per master
file.
```
#### 50

#### 2 CERTIFICATE NO

```
CertNum
```
```
AN N Only applicable for
accounts with Term
deposit file such as
fixed deposits - If any as
per Term Deposit file.
Put "0" if not
applicable.
```
#### 38


```
TITLE Guidelines on Deposit Information Systems and Submission
```
**Position
(column)**

```
Field Name
Column Header
```
```
Type
(A=alpha/
N=numeric)/
DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks
Max
Length
```
```
Default
Value if
Not
Available
```
```
Numeric Type
```
#### A

```
Transaction Record -
Account Number 1
3 RM LEDGER
BALANCE/
OUTSTANDING
DEPOSIT BALANCE
```
```
LedgerBal
```
```
N Y RM Ledger balance =
Outstanding balance
inclusive of cheque
clearing suspense
(outward clearing).
Amount defined to 2
decimal places. (e.g.
500.20 to denote five
hundred and twenty
cents).
```
```
All applicable accounts
should be reported
regardless of positive or
negative balance.
However, account with
negative balance is to
be reported as "0"
(zero) balance.
```
```
For foreign currency
account, the RM
converted amount shall
be recorded in this
field.
```
```
Put "0" if not
applicable.
```
```
money
```
#### 4 RM AVAILABLE

#### DEPOSIT BALANCE

```
AvailableBal
```
```
N Y Ledger balance in field
3 less the float amount
(uncleared amount).
```
```
Amount defined to 2
decimal places. (e.g.
500.20 to denote RM
five hundred and
twenty cents).
```
```
All applicable accounts
should be reported
regardless of positive or
negative balance.
However, account with
negative balance is to
be reported as "0"
(zero) balance.
```
```
Available balance
arising from
Overdraft/financing
facilities should not be
included.
```
```
For foreign currency
accounts, the RM
converted amount shall
be recorded in this
field.
```
```
money
```

```
TITLE Guidelines on Deposit Information Systems and Submission
```
**Position
(column)**

```
Field Name
Column Header
```
```
Type
(A=alpha/
N=numeric)/
DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks
Max
Length
```
```
Default
Value if
Not
Available
```
```
Numeric Type
```
#### A

```
Transaction Record -
Account Number 1
5 RM ACCRUED
INTEREST/DIVIDEND/
PROFIT
```
```
AccruedInt/Prof
```
```
N Y Interest/dividend/profit
accrued to the account
but not yet credited to
customers.
```
```
Amount defined to 2
decimal places. (e.g.
500.20 to denote RM
five hundred and
twenty cents).
```
```
For foreign currency
account, the RM
converted amount shall
be recorded in this
field.
```
```
Note: This figure can be
expressed in negative
value.
```
```
Put "0" if not applicable
```
```
0 money
```
#### 6 RM NOMINAL VALUE

```
NominalValue
```
```
N Y The face value for the
NID/INI.
```
```
For foreign currency
accounts, the RM
converted amount shall
be recorded in this
field.
```
```
This is also applicable
for positive or negative
value. However,
negative value is to be
reported as "0" zero.
```
```
Put "0" if not applicable
```
```
0 money
```
#### 7 RM PROCEED VALUE

```
ProceedValue
```
```
N Y Proceed value for
NID/INI as at report
date.
```
```
Amount defined to 2
decimal places. (e.g.
500.20 to denote RM
five hundred and
twenty cents).
```
```
This is also applicable
for positive or negative
value. However,
negative value is to be
reported as "0" zero.
```
```
For foreign currency
accounts, the RM
converted amount shall
be recorded in this
```
```
0 money
```

```
TITLE Guidelines on Deposit Information Systems and Submission
```
**Position
(column)**

```
Field Name
Column Header
```
```
Type
(A=alpha/
N=numeric)/
DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks
Max
Length
```
```
Default
Value if
Not
Available
```
```
Numeric Type
```
#### A

```
Transaction Record -
Account Number 1
field.
```
```
The same value is to be
reported in field 3.
```
```
Put "0" if not
applicable.
8 RM BILLS PAYABLE
OUTSTANDING
```
```
BillPayable
```
```
N Y Only bills payable
originated from
debiting of deposit
account are to be
reported. Example -
debiting of current
account for purchase of
bankers draft.
```
```
For foreign currency
accounts, the RM
converted amount shall
be recorded in this
field.
```
```
Put "0" if not
applicable.
```
```
0 money
```
#### 9 RM

#### INTEREST/DIVIDEND/

#### PROFIT PAID TODATE

```
Int/ProfPdTodate
```
```
N Y Interest/dividend/profit
accrued and paid (for
the year) to customer
before the account
matured– i.e. interim
interest/dividend.
```
```
Amount defined to 2
decimal places. (e.g.
500.20 to denote RM
five hundred and
twenty cents).
```
```
For foreign currency
accounts, the RM
converted amount shall
be recorded in this
field.
```
```
Put "0" if not
applicable.
```
```
0 money
```
#### 10 FX LEDGER

#### BALANCE/

#### OUTSTANDING

#### DEPOSIT BALANCE

```
FxLedgerBal
```
```
N Y Ledger balance for
foreign currency
account in the original
currency.
```
```
Ledger balance =
Outstanding balance
inclusive of cheque
clearing suspense
(outward clearing).
Amount defined to 2
decimal places. (e.g.
500.20 to denote five
```
```
0 money
```

```
TITLE Guidelines on Deposit Information Systems and Submission
```
**Position
(column)**

```
Field Name
Column Header
```
```
Type
(A=alpha/
N=numeric)/
DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks
Max
Length
```
```
Default
Value if
Not
Available
```
```
Numeric Type
```
#### A

```
Transaction Record -
Account Number 1
hundred and twenty
cents).
```
```
All applicable accounts
should be reported
regardless of positive or
negative balance.
However, account with
negative balance is to
be reported as "0"
(zero) balance.
```
```
Put "0" if not
applicable.
11 FX AVAILABLE
DEPOSIT BALANCE
```
```
FxAvailableBal
```
```
N Y Available balance for
foreign currency
account in the original
foreign currency.
Ledger balance in items
8 less the float amount
(uncleared amount).
```
```
Amount defined to 2
decimal places. (e.g.
500.20 to denote Five
hundred and twenty
cents).
```
```
All applicable accounts
should be reported
regardless of positive or
negative balance.
However, account with
negative balance is to
be reported as "0"
(zero) balance.
Available balance
arising from overdraft/
financing facilities
should not be included.
```
```
Put "0" if not
applicable.
```
```
0 money
```
#### 12 FX ACCRUED

#### INTEREST/DIVIDEND/

#### PROFIT

```
FxAccruedInt/Prof
```
```
N Y The balance for foreign
currency account in the
original foreign
currency.
Interest/dividend/profit
accrued to the account
but not yet credited to
customers. Amount
defined to 2 decimal
places. (e.g. 500.20 to
denote five hundred
and twenty cents).
```
```
Put "0" if not
applicable.
```
```
0 money
```

```
TITLE Guidelines on Deposit Information Systems and Submission
```
**Position
(column)**

```
Field Name
Column Header
```
```
Type
(A=alpha/
N=numeric)/
DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks
Max
Length
```
```
Default
Value if
Not
Available
```
```
Numeric Type
```
#### A

```
Transaction Record -
Account Number 1
Note: This figure can be
expressed in negative
value.
13 FX NOMINAL VALUE
```
```
FxNominalValue
```
```
N Y For the foreign
currency account in the
original foreign
currency.
```
```
The face value for the
NID/INI.
```
```
This is also applicable
for positive or negative
value. However,
negative value is to be
reported as "0" zero.
```
```
Put "0" if not
applicable.
```
```
0 money
```
#### 14 FX PROCEED VALUE

```
FxProceedValue
```
```
N Y The balance for foreign
currency account in the
original foreign
currency.
```
```
Proceed value for
NID/INI as at report
date.
```
```
Amount defined to 2
decimal places. (e.g.
500.20 to denote five
hundred and twenty
cents).
```
```
This is also applicable
for positive or negative
value. However,
negative value is to be
reported as "0" zero.
```
```
The same value is to be
reported in field 10.
```
```
Put "0" if not
applicable.
```
```
0 money
```
#### 15 FX BILLS PAYABLE

#### OUTSTANDING

```
FxBillPayable
```
```
N Y Only bills payable
originated from
debiting of deposit
account are to be
reported. Such as
debiting of current
account for purchasing
of bankers draft,
internet transfer via
IBG etc.
```
```
For foreign currency
accounts, the RM
```
```
0 money
```

```
TITLE Guidelines on Deposit Information Systems and Submission
```
**Position
(column)**

```
Field Name
Column Header
```
```
Type
(A=alpha/
N=numeric)/
DT=Date
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks
Max
Length
```
```
Default
Value if
Not
Available
```
```
Numeric Type
```
#### A

```
Transaction Record -
Account Number 1
converted amount shall
be recorded in this
field.
```
```
Put "0" if not
applicable.
16 FX
INTEREST/DIVIDEND/
PROFIT PAID TODATE
```
```
FxInt/ProfPd
Todate
```
```
N Y The amount in the
original foreign
currency.
```
```
Interest/dividend/profit
accrued and paid to
customer for the year
before the account
matured– i.e. interim
interest/dividend.
```
```
Amount defined to 2
decimal places. (e.g.
500.20 to denote five
hundred and twenty
cents).
```
```
0 money
```
#### 17 SOURCE SYSTEM

#### REFERENCE

```
SourceSystem
```
```
AN Y Assigned serial number
(e.g. 0001, 0002 etc.)
for the respective
deposit source system
as stated in the
file/batch name.
```
#### 4 -

#### 18 ACCOUNT OPENING

#### DATE

```
AccOpeningDate
```
```
DT Y The date when the
account was originally
opened - YYYYMMDD
```
```
NOTE:
For old account where
DTM cannot trace back
the account opening
date, the field is to be
defaulted to
“19000101”.
```
```
For account opening
effective 1st January
2013 onwards, DTM
must ensure that the
information is available
for reporting to PIDM.
```
#### 19000101


```
TITLE Guidelines on Deposit Information Systems and Submission
```
### Appendix I(g): Contact Details for Internet Banking Accounts File Format

#### FILE SPECIFICATION

```
Name Contact Details For Internet Banking Accounts File - PIDM Standard File Format
File Description This is a batch file created by the DTM setting out the contact details for internet banking customers.
The internet banking contact details file is not required to be submitted for annual SFF submission. The file is to be
submitted when PIDM requires DTM to submit their data via SFF pursuant to paragraph 4. 5 of these DISS Guidelines.
```
(^)
**File/batch Name BankCodecontactYYYYMMDDnnn**
BankCode = The DTM’s bank code (e.g. 0227 for Maybank)
contact = to denote "Internet Banking Contact Details file".
YYYYMMDD = the record date (e.g. 20071231) need to be adjusted
nnn = the serial number start with 001
e.g.: 0227contact20071231001
**Format** Text File
**Sample Transaction Header
Column Header**
Transaction Record Account Number 1
Transaction Record Account Number 2
Transaction Record Account Number 3
Transaction Record Account Number 4
**.....
Position
(column)
Field Description Type (A=alpha/ N=numeric)
Mandatory field
Y=Yes, N= No
Remarks
A Transaction Header**
1 BATCH NUMBER AN Y refer to file/batch name
**Position
(column)
Field Name
Column Header
Type (A=alpha/
N=numeric)/
DT=Date
Mandatory
field
Y=Yes, N= No
Remarks
Max
Length
Default
Value if Not
Available
Numeric
Type**

#### A

```
Transaction Record -
Account Number 1
1 ACCOUNT NUMBER
```
```
AccNum
```
```
AN Y Account number/
Transaction ref No/ Deal
No. as per master file.
```
#### 50

#### 2 TEL NUMBER - HP

```
TelHp
```
```
AN Y Telephone number used
for verification of online
banking transactions
```
#### 200 0

#### 3 EMAIL

```
Email
```
```
AN Y Email address linked to
internet banking account
(if any).
```
#### 200 0


```
TITLE Guidelines on Deposit Information Systems and Submission
```
### Appendix I(h): Branch Code File Format

#### FILE SPECIFICATION

```
Name Branch Code - PIDM Standard File Format
File Description 1. This is a batch file created by DTM setting out the details of all the branch codes stated
in the Masterfile.
```
2. The branch code file is to be submitted with every submission of SFF file to PIDM.

```
File/batch Name BankCodebrcodeYYYYMMDDnnn
```
```
BankCode = The DTM’s bank code (e.g. 0227 for Maybank)
brcode = to denote "branch code file".
YYYYMMDD = the record date (e.g. 20071231) need to be adjusted
nnn = the serial number start with 001
```
```
e.g.: 0227brcode20071231001
Format Excel File
```
```
Position(column) Field Name
```
```
Column Header
```
```
Type (A=alpha/
N=numeric)
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks
```
```
A Transaction Record -Branch
Number 1
1 BANK CODE
```
```
Bankcode
```
```
AN Y DTM’s Bank Code (e.g. 0227 for
Maybank)
```
#### 2 BRANCH CODE

```
Branchcode
```
```
AN Y The branch code as per SFF master file
```
#### 3 BRANCH NAME

```
Branchname
```
```
AN Y The branch name
```
#### 4 POSTCODE

```
PostCode
```
```
AN Y Post code of branch
```
#### 5 FULL ADDRESS

```
FullAddress
```
```
AN Y The branch full address (excluding
Postcode and State)
```
#### 6 STATE

```
State
```
```
A Y State code as follows:
JHR = Johor
KDH = Kedah
KTN = Kelantan
KUL = F.T.Kuala Lumpur
LBN = F.T. Labuan
MLK = Melaka
NSN = Negeri Sembilan
PHG = Pahang
PJY = F.T. Putrajaya
PLS = Perlis
PNG = Penang
PRK = Perak
SBH = Sabah
SGR = Selangor
SWK = Sarawak
```

```
TITLE Guidelines on Deposit Information Systems and Submission
```
**Position(column) Field Name**

```
Column Header
```
```
Type (A=alpha/
N=numeric)
```
```
Mandatory
field
Y=Yes,
N= No
```
```
Remarks
```
```
A Transaction Record -Branch
Number 1
TRG = Terengganu
ZZZ = Others
```
```
7 Longitude code
```
```
Longitude
```
```
AN Y At main entrance of Branch
e.g.101^0 41’ 5.5” E stated as
101,41,5.5,E
```
```
8 Latitude Code
```
```
Latitude
```
```
AN Y At main entrance of Branch
e.g. 3^0 8’ 2.1” N stated as 3,8,2.1,N
```

```
TITLE Guidelines on Deposit Information Systems and Submission
```
## Appendix II: Product Summary Report on SFF for Records as at DD/MM/YYYY

```
Name Of Deposit-Taking Member (“DTM”): ABC BANK BERHAD
```
```
Bank Code: 0123 (4 digits)
```
```
Submission Date: (DD/MM/YYYY)
```
```
Submission No: 01 (2 digits: e.g.: “01” for first submission, “02” for second submission & so on)
```
```
Business Type
(Islamic =1
Conventional =2)
```
```
Deposit/
Product
Type
```
```
Deposit/Product Type (name)
```
#### (1) (2) (3) (4) (5) (6)

```
Total
Accounts
```
```
Ledger
Balance
as at
DD/MM/
YYYY
(RM)*
```
```
Total Insurable
Deposits
```
```
Total
Non-Insurable
Deposits/
Excluded
Deposits/
Non-Deposit
Products
No. of
Accounts RM^
```
```
No. of
Accounts RM^
2/1 1 Demand Deposit 3 2.00 1 1.00 2 1.00
2/1 2 Saving Deposit 0 -
2/1 3 Fixed Deposit 0 -
2/1 4 Specific Investment 0 -
2/1 5 General Investment 0 -
2/1 6 Commodity Murabahah 0 -
```
```
2/1 7
```
```
Short Term Deposit (inclusive
of Money Market Time
Deposit)
```
#### 0 -

```
2/1 8 Bearer Deposit 0 -
```
```
2/1 9
```
```
Negotiable Instrument of
Deposit/Islamic Negotiable
Instrument
```
#### 0 -

#### 2/1 10

```
Repurchase Agreements/ Sell
and Buy Back Agreement
```
#### 0 -

```
2/1 11 Interbank Placement
```
```
2/1 12
```
```
Investment Linked to
Derivatives Offered /
Structured Product
```
#### 0 -

```
2/1 13 Gold Investment Account 0 -
2/1 14 Silver Investment Account 0 -
2/1 15 Investment Account
2/1 99 Other Deposits 0 -
TOTAL 3 2.00 1 1.00 2 1.00
* The "Total Ledger Balance in Column 2 should correspond with Appendix III – “Total Deposits and Non-Deposits in SFF".
```
```
Checked By: (Signature) Approved By: (Signature)
Name: Name:^
Position: Position:
Date: Date:^
Contact No:
```
## Denotes cell to be populated by DTM.^


```
TITLE Guidelines on Deposit Information Systems and Submission
```
## Appendix III: Reconciliation Template of Deposit Balance in General Ledger vs. SFF for Records

## as at DD/MM/YYYY

```
Name Of Deposit-Taking Member (“DTM”): ABC BANK BERHAD
```
```
Bank Code: 0123 (4 digits)
```
```
Business Type: (Indicate “1” for Islamic Business &
“2” for Conventional Business)
```
```
Submission Date: (DD/MM/YYYY)
```
```
Submission No: (2 digits: e.g.: “01” for first submission, “02” for second submission
& so on)
```
#### (A)

#### DETAILS

#### (B)

#### RM

#### (C)

#### RM

```
Explanation for
Column (C)
```
```
Total Deposits Accepted as at DD/MM/YYYY^ Note 1 xxx (U)^
```
```
Add : 1. Deposit liability items not in General Ledger (if any) and Non-deposit items reported in SFF (if any)
e.g. : Money Market Deposit xxx (a)
Unclaimed Monies xxx (b)
Gold Saving/ Investment Account xxx (c)
.....etc. xxx (d) xxx (V) = (a)+(b)+(c)+(d)+(..)
Sub-total (W) xxx (W)=(U)+(V)
```
```
Minus : 2. Deposit liability items included in DTM’s records but not reported in SFF (if any)
e.g. : Nostro/Vostro account due from.. xxx (f)
xxxxxx xxx (g)
.....etc. xxx (h) xxx (X) = (e)+(f)+(g)+(h)+(...)
Total Deposits and Non-Deposits in SFF Note 2 xxx (Y)^ = (W)-(X)
```
**Note 1:**

- For annual submission, this amount should correspond with the deposit liability amount reflected in the Statement of Financial Position (“SOFP”) as per the DTM’s financial statements.
    A copy of the SOFP and the relevant notes relating to deposits from the financial statements must be attached to this Appendix. If financial statements are not available, the management
    accounts should be submitted.
- For submission for readiness testing purpose/special examination, this amount should correspond with the DTM’s general ledger for the date specified by PIDM.

**Note 2** :
Should correspond with SFF Master File- (B19)

```
Prepared By: (Signature) Approved By: (Signature)
Name: Name:^
Position: Position: Chief Financial Officer
Date: Date:^
Contact No:
```
```
Denotes cell to be populated by DTM.
```
Note: DTMs that have been granted a written approval under subsection 15(1) of the Financial Services Act 2013 _[Act 758]_ to carry on Islamic
banking business in addition to its licensed business must submit 2 separate templates i.e. for Conventional (business Type =2) and Islamic
(business Type=1).


```
TITLE Guidelines on Deposit Information Systems and Submission
```
## Appendix IV (a): Aggregation Summary Report for Records as at 31 December YYYY

```
Name Of Deposit-Taking Member (“DTM”) : ABC BANK BERHAD
```
```
Bank Code: 0123 (4 digits)
```
```
Business Type: (Indicate “1” for Islamic Bank &
“2” for Conventional Bank)
```
```
Submission Date: (DD/MM/YYYY)
```
```
Submission No: (2 digits: e.g.: “01” for first submission, “02” for second
submission & so on)
Business
Type
(Islamic
Business = 1
Conventional
Business=2)
```
```
Account
Type
```
```
Account Type-
Description
```
#### (1) (2) (3) (4) (5) (6)^

```
Total Insured
DepositsNote 1
(RM)
```
```
Total
Uninsured
Deposits
(RM)
```
```
Total
Non-
Insurable
Deposits/
Excluded
Deposits/
Non-
Deposit
Products
(RM)
```
```
Total
Balance
(RM)
(1)+(2)+(3)
```
```
No. of
Entities
```
```
No. of
Insured
Entities
```
```
2 1 Individual Person 1.00 2.00 3.00 6.00 1 2
```
```
2 2 Individual Person -^
Joint
```
#### 0.00 0.00 0.00 0.00 0 0

#### 2 3

```
Individual Person -
Trust 0.00^ 0.00^ 0.00^ 0.00^0  0
2 4 Sole Proprietorship 0.00 0.00 0.00 0.00 0 0
2 5 Partnership 0.00 0.00 0.00 0.00 0 0
2 6 Non Individual Person 0.00 0.00 0.00 0.00 0 0
```
```
2 7
Non-Individual Person
```
- Trust

#### 0.00 0.00 0.00 0.00 1 2

#### TOTAL 1.00 2.00 3.00 6.00 2 4

```
1 1 Individual Person 1.00 2.00 3.00 6.00 1 2
```
```
1 2
Individual Person -
Joint
```
#### 0.00 0.00 0.00 0.00 0 0

#### 1 3

```
Individual Person -
Trust
```
#### 0.00 0.00 0.00 0.00 0 0

```
1 4 Sole Proprietorship 0.00 0.00 0.00 0.00 0 0
1 5 Partnership 0.00 0.00 0.00 0.00 0 0
1 6 Non Individual Person 0.00 0.00 0.00 0.00 0 0
```
```
1 7
Non-Individual Person
```
- Trust

#### 0.00 0.00 0.00 0.00 0 0

#### TOTAL 1.00 2.00 3.00 6.00 1 2

#### GRAND TOTAL 2.00 4.00 6.00 12.00 3 6

Note 1: Total Column (1) [i.e. Total Insured Deposit] must tally with Total Insured Deposits reflected in the Return on Total Insured Deposit [i.e.
item (E) for the corresponding period.

```
Checked By: (Signature) Approved By: (Signature)
Name: Name:
Position: Position:
Date: Date:
Contact No:
```
## Denotes cell to be populated by DTM.


```
TITLE Guidelines on Deposit Information Systems and Submission
```
## Appendix IV (b): Reconciliation Between Aggregation Summary Report and RTID

```
Name Of Deposit-Taking Member (“DTM”) : ABC BANK BERHAD
```
```
Bank Code: 0123 (4 digits)
```
```
Business Type: (Indicate “1” for Islamic Business &
“2” for Conventional Business)
```
```
Submission Date: (DD/MM/YYYY)
```
```
Submission No: (2 digits: e.g.: “01” for first submission, “02” for
second submission & so on)
```
```
Assessment Year (YYYY)
```
```
Descriptions RM RM
Insurable deposits reported in RTID Note 1 (A)
Insurable deposits reported in Appendix IV(a) Note 2 (B)
Difference (C) = (A)-(B)
Variance was due to :
```
```
Items reported in RTID but was not reported in SFF:
E.g. : Consolidated Unclaimed monies (D1)
Bills payable (D2)
```
```
.....etc. (D3) (D) =
(D1)+(D2)+(D3)+(...)
```
```
Items reported in SFF but was not reported in RTID:
E.g. : Nostro/Vostro Account (E1)
.....etc. (E2) (E) = (E1)+(E2)+(...)
```
**Total Note 3 (F) = (D)+(E)
Note 1** : As per Section (C) in RTID
**Note 2:** The aggregate of Columns (1) & (2) of Appendix IV(a)
**Note 3:** Item (F) should be equal to value stated item (C)

```
Checked By: (Signature) Approved By: (Signature)
Name: Name:
Position: Position:
Date: Date:
Contact No:
```
```
Denotes cell to be populated by DTM.
```
Note: DTMs that have been granted a written approval under subsection 15(1) of the Financial Services Act 2013 to carry on Islamic banking
business in addition to its licensed business must submit 2 separate templates i.e. for Conventional (business Type =2) and Islamic products
(business Type=1).


```
TITLE Guidelines on Deposit Information Systems and Submission
```
## Appendix V: Submission of Documentation of SFF Generation Process

## -------------------------------To be prepared on DTM’s letterhead-----------------------------

## Perbadanan Insurans Deposit Malaysia

## [Address]

## [DTM’S NAME]

## SUBMISSION OF DOCUMENTATION OF SFF GENERATION PROCESS TO PERBADANAN

## INSURANS DEPOSIT MALAYSIA (“PIDM”)

## We hereby attach our submission of the documentation/revisions/updates of the SFF

## Generation Process, as at [dd/mm/yyyy] pursuant to Section 7 of the Guidelines on Deposit

## Information Systems and Submission.

## _________________________________

## Name:

## Designation:

## Date: [dd/mm/yyyy]

## Attachment 1 : Documentation of SFF Generation Process

## ^


```
TITLE Guidelines on Deposit Information Systems and Submission
```
## Appendix V (Attachment 1 ) :

## Documentation of SFF Generation Process

## Contents Attachment

## (a) Details of the key systems, processes (including adjustments and

## reconciliation processes) and personnel involved at each stage of

## generating the SFF files, within the stipulated timeframe as set out in

## paragraph 3. 10 of these DISS Guidelines.

## At minimum, the documentation of the SFF generation process should

## cover:

## • System overview of the end-to end SFF generation process -

## including the source systems, the data warehouse process, the

## report generation and reconciliation process;

## • The duration of the key processes;

## • The roles and responsibilities of the departments/key personnel

## involved at each stage of the process; and

## • Key compliance and internal controls maintained throughout the

## process; which includes ensuring adequacy of IT controls of the

## key systems and its IT environment (security of key systems,

## controls on data quality, data integrity, accessibility and

## availability).

## 1(a)

## (b) Details of key risks and limitations, if any, in generating the respective

## SFF files within the stipulated timeframes and on any date as required

## by PIDM;

## 1(b)

## (c) Where the development and/or maintenance of the system and any

## other processes related to the generation of the SFF are outsourced, to

## include details of the outsourcing arrangements such as the

## systems/processes outsourced and the name of the party(ies) involved.

## This includes third party service providers/vendors and/or other

## related/group entities; and

## 1(c)

## (d) Listing of reports for system reconciliation purposes (e.g. exception

## reports).

## 1(d)


```
TITLE Guidelines on Deposit Information Systems and Submission
```
## Appendix VI: Annual Certification of Compliance

## -------------------------------------To be prepared on DTM’s letterhead------------------------------

## Perbadanan Insurans Deposit Malaysia

## [Address]

## [DTM’S NAME]

## ANNUAL SUBMISSION OF INFORMATION IN STANDARD FILE FORMAT (“SFF”) AS AT 31

## DECEMBER 20[XX] TO PERBADANAN INSURANS DEPOSIT MALAYSIA (“PIDM”)

## The information in SFF has been prepared and submitted to PIDM in accordance with the

## Guidelines on Deposit Information Systems and Submission (“DISS Guidelines”).

## We declare that effective key compliance and internal control have been maintained over the

## recording of transactions and that information provided to PIDM in the SFF on [dd/mm/yyyy] for

## the position as at 31 December 20[XX] is, to the best of our knowledge, true and correct.

## In particular, we declare that [DTM’s Name]’s deposit liability system(s) complies/comply* with

## the minimum requirements^ for deposit liability systems as required in the DISS Guidelines.Note 1^

## (Name of Chief Financial Officer) (Name of Chief Executive Officer)

## Chief Financial Officer Chief Executive Officer

## Date: [dd/mm/yyyy] Date: [dd/mm/yyyy]

Note 1:

If there are exceptions, replace this paragraph with the following:

“In particular, we declare that [DTM’s Name]’s deposit liability system(s) complies/comply* with the minimum

requirements^ for deposit liability systems as required in the DISS Guidelines, with the exception of the following

matters:

1. ....
2. .....”

## * Delete as applicable


```
TITLE Guidelines on Deposit Information Systems and Submission
```
## Appendix VII: Confirmation of No Changes to Documentation of SFF Generation Process

## ------------------------------To be prepared on DTM’s letterhead------------------------------

## Perbadanan Insurans Deposit Malaysia

## [Address]

## [DTM’S NAME]

## CONFIRMATION OF NO CHANGES TO DOCUMENTATION OF SFF GENERATION PROCESS AS AT

## 31 DECEMBER 20[XX] TO PERBADANAN INSURANS DEPOSIT MALAYSIA (“PIDM”)

## In accordance with the Guidelines on Deposit Information Systems and Submission, this is to

## confirm that there are no changes to the documentation of SFF generation process as submitted

## to you on [dd/mm/yyyy].

## ___________________________________

## Name :

## Designation :

## Date: [dd/mm/yyyy]


```
TITLE Guidelines on Deposit Information Systems and Submission
```
## Appendix VIII: Checklist for Annual Submission

```
No Document Format
Submission
Requirements
```
```
Please tick
where
applicable
```
```
Remarks / Reference
```
```
1 Standard File Format:
```
```
a) Master File Text Soft Copy Appendix I(a)
```
```
b) Account Holder File Text Soft Copy Appendix I(b)
```
```
c) Term Deposit Details File Text Soft Copy Appendix I(c)
```
```
d) Beneficiary File Text Soft Copy Appendix I(d)
```
```
e) Address File Text Soft Copy Appendix I(e)
```
```
f) Branch Code File
```
```
Excel (reporting
template provided
by PIDM)
```
```
Soft Copy Appendix I(h)
```
```
2
Product Summary Report on Standard File
Format for Records as at 31/12/YYYY
```
```
Excel (reporting
template provided
by PIDM)
```
```
Soft Copy
Appendix II
Scanned copy^
```
```
3
```
```
Reconciliation Template of Deposit
Balance In General Ledger vs. Standard File
Format (SFF) For Records as at 31/12/YYYY
```
```
Excel (reporting
template provided
by PIDM)
```
```
Soft Copy
Appendix III
Scanned copy^
```
```
4
```
```
Aggregation Summary Report for Records
as at 31/12/YYYY
```
```
Excel (reporting
template provided
by PIDM)
```
```
Soft Copy
Appendix IV(a)
Scanned copy^
```
```
5
Reconciliation between Aggregation
Summary Report and RTID
```
```
Excel (reporting
template provided
by PIDM)
```
```
Soft Copy
Appendix IV(b)
Scanned copy^
```
```
6
```
```
Submission of Documentation of SFF
Generation Process
Word/PDF Scanned copy Appendix V
```
```
7 Annual Certification of Compliance Word/PDF Scanned copy Appendix VI
```
```
8
Confirmation of no changes to
documentation of SFF generation process
```
```
Word/PDF Scanned copy Appendix VII
```
**NAME OF DEPOSIT-TAKING MEMBER : ABC BANK BERHAD**

**BANK CODE : 4 digits - E.g.: “0123” for ABC Bank Berhad**

**ASSESSMENT YEAR : YYYY**

**SUBMISSION DATE: : DD/MM/YYYY**

**SUBMISSION NO: : (2 digits: e.g.: “01” for first submission, “02” for second submission &
so on)**


```
TITLE Guidelines on Deposit Information Systems and Submission
```
## Appendix IX: Checklist for Readiness Testing /Special Examination Submission

```
NAME OF DEPOSIT-TAKING MEMBER : ABC BANK BERHAD
```
```
BANK CODE : 4 digits - E.g.: “0123” for ABC Bank Berhad
```
```
INFORMATION AS AT : DD/MM/YYYY
```
```
SUBMISSION DATE: : DD/MM/YYYY
```
```
SUBMISSION NO: : (2 digits: e.g.: “01” for first submission, “02” for second submission
& so on)
```
```
No. Document Format
```
```
Submission
Requirements
```
```
Please tick
where
applicable
```
```
Remarks /
Reference
```
```
1
Standard File Format:
```
```
a) Master File Text Soft Copy Appendix I(a)
```
```
b) Account Holder File Text Soft Copy Appendix I(b)
```
```
c) Term Deposit Details File Text Soft Copy Appendix I(c)
```
```
d) Beneficiary File Text Soft Copy Appendix I(d)
```
```
e) Address File Text Soft Copy Appendix I(e)
```
```
f) Financial Replacement File Text Soft Copy Appendix I(f)
g) Contact details For Internet
Banking Account File
Text Soft Copy Appendix I(g)
```
```
h) Branch Code File
```
```
Excel (template
provided by
PIDM)
```
```
Soft Copy Appendix I(h)
```
```
2 Product Summary Report on SFF
```
```
Excel (template
provided by
PIDM)
```
```
Soft Copy Appendix II
```
```
3
Reconciliation of Deposit Balance
In General Ledger vs. SFF
```
```
Excel (template
provided by
PIDM)
```
```
Soft Copy Appendix III
```

