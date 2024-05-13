"use strict";(self.webpackChunkBrillianDocs=self.webpackChunkBrillianDocs||[]).push([[524],{5222:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=n(4848),t=n(8453);const a={id:"aws",title:"Amazon Web Services (AWS)",sidebar_position:3},r=void 0,o={id:"general_IT/aws",title:"Amazon Web Services (AWS)",description:"Amazon Web Services (AWS) can present a steep learning curve to newcomers; it's not structured around a centralized dashboard, so users require a grasp of specific AWS jargon and an understanding of how services are regionally distributed to effectively manage their configurations. This documentation aims to demystify the IMBIT AWS infrastructure by providing a detailed walkthrough.",source:"@site/docs/general_IT/aws.md",sourceDirName:"general_IT",slug:"/general_IT/aws",permalink:"/docs/general_IT/aws",draft:!1,unlisted:!1,editUrl:"https://github.com/IMBIT-Mannheim/brilliandocs/tree/main/docs/general_IT/aws.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"aws",title:"Amazon Web Services (AWS)",sidebar_position:3},sidebar:"GeneralITSidebar",previous:{title:"Source Code and Credentials",permalink:"/docs/general_IT/credentials"},next:{title:"Metaverse",permalink:"/docs/general_IT/metaverse"}},l={},c=[{value:"Each AWS Service",id:"each-aws-service",level:2},{value:"Regions",id:"regions",level:2},{value:"Domains and DNS Settings",id:"domains-and-dns-settings",level:2},{value:"Networking Setup (in VPC Dashboard)",id:"networking-setup-in-vpc-dashboard",level:2},{value:"Email Infrastructure Using AWS WorkMail and SES",id:"email-infrastructure-using-aws-workmail-and-ses",level:2},{value:"AWS WorkMail Configuration (IRELAND!)",id:"aws-workmail-configuration-ireland",level:3},{value:"AWS Simple Email Service (SES) Configuration (IRELAND!)",id:"aws-simple-email-service-ses-configuration-ireland",level:3},{value:"Email Receiving Configuration",id:"email-receiving-configuration",level:3},{value:"SMTP User and Credentials",id:"smtp-user-and-credentials",level:3},{value:"Identity and Access Management (IAM)",id:"identity-and-access-management-iam",level:2},{value:"Elastic Beanstalk for Application Deployment",id:"elastic-beanstalk-for-application-deployment",level:2},{value:"CloudFront as a Reverse Proxy",id:"cloudfront-as-a-reverse-proxy",level:2},{value:"Elastic Compute Cloud (EC2)",id:"elastic-compute-cloud-ec2",level:2},{value:"Key Pair and Instance Access",id:"key-pair-and-instance-access",level:3},{value:"Security Groups and Instance Configuration",id:"security-groups-and-instance-configuration",level:3},{value:"EC2 Volumes and Auto Scaling",id:"ec2-volumes-and-auto-scaling",level:3},{value:"CI/CD GitHub Workflow Pipeline",id:"cicd-github-workflow-pipeline",level:2},{value:"Data Backup Strategy",id:"data-backup-strategy",level:2},{value:"Preventing Data Loss and Handling EC2 Shutdowns",id:"preventing-data-loss-and-handling-ec2-shutdowns",level:2}];function d(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:"Amazon Web Services (AWS) can present a steep learning curve to newcomers; it's not structured around a centralized dashboard, so users require a grasp of specific AWS jargon and an understanding of how services are regionally distributed to effectively manage their configurations. This documentation aims to demystify the IMBIT AWS infrastructure by providing a detailed walkthrough."}),"\n",(0,s.jsx)(i.h2,{id:"each-aws-service",children:"Each AWS Service"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Elastic Beanstalk"}),": A PaaS platform for deploying web applications developed for example with Docker."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Amazon EC2 (Elastic Compute Cloud)"}),": A service that provides IaaS computing, allowing to run and manage server instances."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Amazon VPC (Virtual Private Cloud)"}),": A service that provides networking within AWS."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Route 53"}),": The Domain Name System (DNS) for managing and registering domains."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Amazon CloudFront"}),": A content delivery network (CDN) service that securely delivers data globally with reverse proxy capabilities."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"AWS ACM (Certificate Manager)"}),": A service that lets you easily create SSL/TLS certificates."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Amazon WorkMail"}),": Prodiving Mailbox functionality."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Amazon SES (Simple Email Service)"}),": A cloud-based email sending service."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Amazon IAM (Identity and Access Management)"}),": A service that enables you to manage user account access to AWS services."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"regions",children:"Regions"}),"\n",(0,s.jsx)(i.p,{children:"AWS resources are hosted across different geographical regions. As of 2024, IMBIT utilizes the following regional structure:"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Location"}),(0,s.jsx)(i.th,{children:"Region Code"}),(0,s.jsx)(i.th,{children:"Note"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Frankfurt"})}),(0,s.jsx)(i.td,{children:"eu-central-1"}),(0,s.jsx)(i.td,{children:"The primary hosting location."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Ireland"})}),(0,s.jsx)(i.td,{children:"eu-west-1"}),(0,s.jsx)(i.td,{children:"For WorkMail and Amazon SES (region requiered by AWS)."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"North Virginia"})}),(0,s.jsx)(i.td,{children:"us-east-1"}),(0,s.jsx)(i.td,{children:"For CloudFront and Certificate Manager (region requiered by AWS)."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Global"})}),(0,s.jsx)(i.td,{children:"N/A"}),(0,s.jsx)(i.td,{children:"Route 53 and IAM are not bound by regional constraints and operate globally."})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"domains-and-dns-settings",children:"Domains and DNS Settings"}),"\n",(0,s.jsx)(i.p,{children:"Managing domains and DNS settings involves:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Registration and Renewal"}),": Domains are registered and renewed directly through AWS and can be managed in Route 53."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"DNS Setup"}),": DNS entries include a 'www' CNAME record that points to the root domain's A record, NS and SOA records pointing to AWS, and specific CNAMES for ACM validation. The A record links to the CloudFront alias URL."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Email-Configured Domain"}),": 'brillianideas.com' is configured with MX records for mail routing, SPF records for sender policy, DMARC for domain-based message authentication, and DKIM for email security, using CNAME records for DKIM verification. All domains are correctly set up with the exception of 'digital-learning-imbit.com.'"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.img,{alt:"Route 53 DNS settings for brillianideas.com",src:n(8052).A+"",width:"1906",height:"961"}),"\nRoute 53 DNS settings for brillianideas.com"]}),"\n",(0,s.jsx)(i.h2,{id:"networking-setup-in-vpc-dashboard",children:"Networking Setup (in VPC Dashboard)"}),"\n",(0,s.jsx)(i.p,{children:"The VPC for IMBIT features:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"A default IP range (10.0.0.0/16)."}),"\n",(0,s.jsx)(i.li,{children:"Private subnets for each application, starting at 10.0.41.0/24."}),"\n",(0,s.jsx)(i.li,{children:"Public subnets (10.0.0.0/20 and 10.0.16.0/20) for allowing external access."}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.img,{alt:"IMBIT-VPC Oerview",src:n(4058).A+"",width:"1820",height:"1155"}),"\nIMBIT-VPC Oerview"]}),"\n",(0,s.jsx)(i.h2,{id:"email-infrastructure-using-aws-workmail-and-ses",children:"Email Infrastructure Using AWS WorkMail and SES"}),"\n",(0,s.jsx)(i.h3,{id:"aws-workmail-configuration-ireland",children:"AWS WorkMail Configuration (IRELAND!)"}),"\n",(0,s.jsxs)(i.p,{children:["To utilize AWS WorkMail for the BrillianIdeas domain (@mail.brillianideas.com), an organization is first established within WorkMail. Currently, there exists a single user: ",(0,s.jsx)(i.code,{children:"no-reply@mail.brillianideas.com"}),". The credentials for this user are securely stored in Bitwarden."]}),"\n",(0,s.jsx)(i.p,{children:"It is essential to maintain a single organization within WorkMail to avoid unnecessary billing. WorkMail charges per user, per month, so it is cost-effective to consolidate users under one organization where possible."}),"\n",(0,s.jsx)(i.h3,{id:"aws-simple-email-service-ses-configuration-ireland",children:"AWS Simple Email Service (SES) Configuration (IRELAND!)"}),"\n",(0,s.jsx)(i.p,{children:"BrillanIdeas leverages AWS SES to handle the receiving and sending of emails. To successfully send emails, the domain and the mailbox user need to be verified, which involves DNS record configuration (automatic DNS settings via the AWS UI) and mailbox verification through a confirmation email link."}),"\n",(0,s.jsxs)(i.p,{children:["Emails are dispatched from the subdomain ",(0,s.jsx)(i.code,{children:"mail.brillianideas.com"}),'. Despite a non-alignment error, "Mail From Datensatz ist nicht ausgerichtet," this can be safely disregarded. Domain-based Message Authentication, Reporting & Conformance (DMARC) records are set up for this subdomain to authenticate outbound emails, enhancing security and delivery success and the domain keys identified mail (DKIM) settings are modern and secure, utilizing 2048-bit encryption keys and managed via CNAMES automatically by AWS.']}),"\n",(0,s.jsxs)(i.p,{children:["To assess the spam rating of sent emails you can use ",(0,s.jsx)(i.a,{href:"https://mail-tester.com",children:"https://mail-tester.com"}),". For testing purposes, one might input the target email address displayed on ",(0,s.jsx)(i.a,{href:"https://mail-tester.com",children:"https://mail-tester.com"})," [into the BrillianCRM registration or similar forms. As in the time of writing the Quiz Application receives a 10 and CRM/ICM receive a 8.5 spam rating (the only issue being the short messages)."]}),"\n",(0,s.jsx)(i.h3,{id:"email-receiving-configuration",children:"Email Receiving Configuration"}),"\n",(0,s.jsx)(i.p,{children:"For receiving emails, two AWS SES rulesets are necessary:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Receipt Rulesets (Empfangsregels\xe4tze):"})," These define the conditions for receiving emails, such as the destination domain (brillianideas.com), and the action to take, which involves directing the email to the relevant WorkMail organization Amazon Resource Name (ARN)."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"IP Address Filter:"})," This is currently set to accept all connections (0.0.0.0/0), allowing unrestricted receipt of emails from any IP address."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"smtp-user-and-credentials",children:"SMTP User and Credentials"}),"\n",(0,s.jsx)(i.p,{children:"For the sending of emails, an identity (SMTP user) is created in AWS Identity and Access Management (IAM). The SMTP user's credentials are stored in Bitwarden, with the SMTP settings usually configured as follows:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Port"}),": 587"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Server"}),": email-smtp.eu-west-1.amazonaws.com"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Protocol"}),": tls"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["To sign in to AWS WorkMail and access the mailbox, you can use the following link: ",(0,s.jsx)(i.a,{href:"https://brillianideas.awsapps.com/mail",children:"https://brillianideas.awsapps.com/mail"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"identity-and-access-management-iam",children:"Identity and Access Management (IAM)"}),"\n",(0,s.jsx)(i.p,{children:"Two key identities configured within IAM:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Mail Sending User:"})," This identity is specifically created for the purpose of sending emails via AWS SES."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"GitHub Workflow User:"})," This user is designated for deploying applications. The user has restricted permissions, limited to ",(0,s.jsx)(i.code,{children:"AdministratorAccess-AWSElasticBeanstalk"})," only. The credentials for this user are hardcoded within the GitHub workflow for automation purposes."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"elastic-beanstalk-for-application-deployment",children:"Elastic Beanstalk for Application Deployment"}),"\n",(0,s.jsx)(i.p,{children:"The majority of the applications are deployed using Elastic Beanstalk. First an application is created and then inside of it an environment needs to be created which are configured as follows:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Application Domain:"})," The Elastic Beanstalk environment URL is set to the application's name (e.g., ",(0,s.jsx)(i.code,{children:"applicationname.eu-central-1.elasticbeanstalk.com"}),"). This domain is necessary for future integration with AWS CloudFront. The platform is set to Docker, and the initial deployment can be done using a sample application, as the actual code will be uploaded via GitHub. After the deployment with the sample code, it is also possible to upload a ",(0,s.jsx)(i.code,{children:"docker-compose.yml"})," file directly through the GUI."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Step 1 of setting up Beanstalk Application",src:n(8489).A+"",width:"995",height:"2480"})}),"\n",(0,s.jsxs)(i.ol,{start:"2",children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Service Roles and EC2 Key Pairs:"})," Provisioning includes selecting the appropriate service roles such as ",(0,s.jsx)(i.code,{children:"aws-elasticbeanstalk-service-role"}),", picking the SSH Key ",(0,s.jsx)(i.code,{children:"IMBIT-SSH"})," and the EC2 instance profile (",(0,s.jsx)(i.code,{children:"aws-elasticbeanstalk-ec2-role"}),")."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Step 2 of setting up Beanstalk Application",src:n(8429).A+"",width:"984",height:"683"})}),"\n",(0,s.jsxs)(i.ol,{start:"3",children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Virtual Private Cloud (VPC) Settings:"})," The IMBIT-VPC is selected, without assigning a public IP, but ensuring the proper subnet is chosen. Each application receives their own subnet in order for proper security! No associated databases are configured."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Step 3 of setting up Beanstalk Application",src:n(948).A+"",width:"983",height:"1133"})}),"\n",(0,s.jsxs)(i.ol,{start:"4",children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Storage and Security:"})," Default volume settings are applied, and the ",(0,s.jsx)(i.code,{children:"IMBIT-SecurityGroup"})," is added. At this stage, no scaling is configured. In terms of architecture, ",(0,s.jsx)(i.code,{children:"arm64"})," may be chosen for cost efficiency, but compatibility with the code base should be verified (only the ",(0,s.jsx)(i.code,{children:"brillianideas"})," application is known to work with ",(0,s.jsx)(i.code,{children:"arm64"}),"). For ",(0,s.jsx)(i.code,{children:"arm64"}),", the instance type is ",(0,s.jsx)(i.code,{children:"t4g"}),", and for ",(0,s.jsx)(i.code,{children:"amd64"}),", the instance type is ",(0,s.jsx)(i.code,{children:"t3.micro"}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Health reporting is set to basic, and automatic updates are disabled as it crashed in the past. However, it may be worthwhile to re-evaluate and test automatic updates in the future."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Step 3 of setting up Beanstalk Application",src:n(7211).A+"",width:"989",height:"3960"})}),"\n",(0,s.jsx)(i.p,{children:"Once configured, the application will be accessible via its Elastic Beanstalk URL and can be updated through the GitHub workflow."}),"\n",(0,s.jsx)(i.h2,{id:"cloudfront-as-a-reverse-proxy",children:"CloudFront as a Reverse Proxy"}),"\n",(0,s.jsx)(i.p,{children:"AWS CloudFront acts as a reverse proxy and one deployment is needed per Beanstalk application."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Origin Domain"}),": The Origin Domain for the CloudFront distribution is configured using the Elastic Beanstalk application URL, which typically takes the form ",(0,s.jsx)(i.code,{children:"https://applicationname.eu-central-1.elasticbeanstalk.com"}),". It is also important to set the protocol to HTTP only with port 80 as the applications have only that port/protocol open."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Origin Path"}),": This is left empty."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Origin Name"}),": The Origin Name is given the name of the application."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"HTTP Methods"}),": By default, the CloudFront distribution is set to allow standard HTTP methods (GET and HEAD). However, for most applications requiere additional methods such as POST, PATCH, and DELETE."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Cache Policy"}),": For the Cache policy ",(0,s.jsx)(i.code,{children:"CachingDisabled"})," is picked as otherwise it takes some time for changes to go live."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Web Application Firewall (WAF)"}),": WAF is not used due to additional costs."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Geographic Restrictions"}),": The distribution is restricted to North America and Europe to optimize for reducing costs."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"SSL/TLS Configuration"}),": CloudFront automatically serves HTTPS and redirects from HTTP."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Alternative Domain Names"}),": To enable CloudFront to respond to requests for custom domains, such as ",(0,s.jsx)(i.code,{children:"brilliancrm.com"}),", alternative domain names need to be entered, and the custom domain SSL certificates need to be picked. The certificates can be requested in ACM (Certificate Manager)."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Certificate Manager Integration"}),": When setting up or renewing SSL certificates with AWS ACM, the domain name and its 'www' subdomain are included in the request. Validation is performed using CNAME records, which can be automatically created in Route 53 if the domain is managed there."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Distribution Deployment"}),": After the configuration settings are in place, the CloudFront distribution is deployed. Once deployed, it takes some time for the changes to propagate across the network of edge locations."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"CloudFront and Route 53 Integration"}),": Once the CloudFront distribution is created and active, the CloudFront domain name is entered into Route 53 as an alias record, which connects the custom domain to the CloudFront distribution, completing the setup process."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Cloudfront Setup",src:n(483).A+"",width:"984",height:"5291"})}),"\n",(0,s.jsx)(i.h2,{id:"elastic-compute-cloud-ec2",children:"Elastic Compute Cloud (EC2)"}),"\n",(0,s.jsx)(i.p,{children:"An EC2 instance (VM) is automatically created when creating a Elastic Beanstalk application/environment."}),"\n",(0,s.jsx)(i.h3,{id:"key-pair-and-instance-access",children:"Key Pair and Instance Access"}),"\n",(0,s.jsx)(i.p,{children:"Each EC2 instance can be accessed using an SSH key, which is managed within the EC2 dashboard. Access to the instance's shell is provided through the AWS UI by clicking on the required instance. However, as deployments are handled as Platform as a Service (PaaS) through AWS Elastic Beanstalk, direct access to EC2 instances is generally not needed."}),"\n",(0,s.jsx)(i.h3,{id:"security-groups-and-instance-configuration",children:"Security Groups and Instance Configuration"}),"\n",(0,s.jsxs)(i.p,{children:["Security groups act as virtual firewalls, controlling the traffic allowed to and from EC2 instances. Modifying a security group's rules may necessitate creating a new EC2 instance to reflect the changes. Each Beanstalk application automatically generates a security group with the suffix ",(0,s.jsx)(i.code,{children:"-env"}),". Additionally, all applications are part of the ",(0,s.jsx)(i.code,{children:"IMBIT-SecurityGroup"}),", which permits any to any HTTP and HTTPS traffic on both IPv4 and IPv6. To allow external SSH access, it must be enabled within this security group."]}),"\n",(0,s.jsx)(i.h3,{id:"ec2-volumes-and-auto-scaling",children:"EC2 Volumes and Auto Scaling"}),"\n",(0,s.jsx)(i.p,{children:"The storage volumes for EC2 instances are automatically provisioned when setting up an Elastic Beanstalk application, with default configurations of 8GB, 100 IOPS, and General Purpose SSD (gp2). Auto scaling groups, which automatically adjust the number of EC2 instances to meet demand, are also created automatically to set to only launch a single instance."}),"\n",(0,s.jsx)(i.h2,{id:"cicd-github-workflow-pipeline",children:"CI/CD GitHub Workflow Pipeline"}),"\n",(0,s.jsxs)(i.p,{children:["Each application employs a GitHub Workflow defined in the ",(0,s.jsx)(i.code,{children:".github/workflows/deploy-AWS.yml"})," file of each repository. This workflow automates the deployment process, building Docker images using the repository's Dockerfile(s) and pushing them to the GitHub image registry and then to their specified Elastic Beanstalk environment upon commits to the main branch. It's essential to ensure that the GitHub repository for the Docker image is set to public, as the default setting will be set to private for new packages and repositories. The setting can be changed in GitHub once a package has been released. Additionally ensure that the application and environment name defined in the ",(0,s.jsx)(i.code,{children:"deploy-AWS.yml"})," matches the one defined for the Elastic Beanstalk environment!"]}),"\n",(0,s.jsx)(i.h2,{id:"data-backup-strategy",children:"Data Backup Strategy"}),"\n",(0,s.jsx)(i.p,{children:"As the code and complete configuration for almost each application resides within their respective GitHub repository, there is currently no a formal backup strategy. Registered user accounts for services BrillianQuiz, BrillianCRM, and BrillianICM are the only valuable data; however users can re-register in the event of a total loss. The sole exception is the WordPress page, which would require a different approach to data backup and restoration."}),"\n",(0,s.jsx)(i.h2,{id:"preventing-data-loss-and-handling-ec2-shutdowns",children:"Preventing Data Loss and Handling EC2 Shutdowns"}),"\n",(0,s.jsx)(i.p,{children:"If there is a need to terminate an application, it should be done through the Elastic Beanstalk dashboard. The application will initially show as terminated and will automatically disappear after a certain period. It is essential to handle the shutdown of EC2 instances with care, as their associated volumes will be deleted!"})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8489:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/beanstalk_step1-12dea75985edd60ae64d3d48137860e4.png"},8429:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/beanstalk_step2-abaad7a8ad741a1bd9cdcb4ff002912c.png"},948:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/beanstalk_step3-33645b87082218325c9ac45c40d356c3.png"},7211:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/beanstalk_step4-c2b75d70216fd83b2b78166df7ce0021.png"},483:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/cloudfront-6a7ae07829ca530ab51d69f02663e8ed.png"},8052:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/route53-18197a86e75d2ba527aa196729abe502.png"},4058:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/vpc-abe5e48d025a4c1ef5a580b4930570d5.png"},8453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>o});var s=n(6540);const t={},a=s.createContext(t);function r(e){const i=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:i},e.children)}}}]);