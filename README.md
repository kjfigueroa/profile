# Professional Profile

Kevin J. Figueroa M
<ol>
    <li><b>Career</b>: Telecommunications Engineer
    </li>
    <li>
    <b>Roles in the industry</b>:
    <ol>
        <li>Site Reliability Engineer Manager</li>
        <li>Site Reliability Engineer</li>
        <li>DevOps Engineer</li>
        <li>Support Engineer</li>
    </ul>
    </li>
</ol>

## Profile Points of interest:
* I have experiences working with **large-scale distributed systems**
* I have provided consulting, deployment and maintenance of software in **On-Legacy architectures**, supporting large projects and services in **digital transactions** for **mobile technologies**.


## Skills

```mermaid
flowchart TB
MAIN((Main Stack));style MAIN fill:#fff,stroke:#000;
OM[Operations Management];style OM fill:#fff,stroke:#ccc;
DT[DevOps Tools];style DT fill:#fff,stroke:#ccc;
OMSM[Linux, UNIX]; style OMSM fill:#fff,stroke:#c3c3c3;
OMCLI[Bash, Dash,<br>Korn]; style OMCLI fill:#fff,stroke:#ccc;
OMPL[Python,Ruby,<br>SQL, PERL]; style OMPL fill:#fff,stroke:#ccc;
MAIN --> OM; OM -->|Server Management| OMSM
OMSM -->|Shell Scripting| OMCLI; OMSM -->|Programming<br>Languages| OMPL
DTWSM[[Nginx, APACHE]]; style DTWSM fill:#fff,stroke:#c1c1c1;
DTVM[KVM & KEMU<br>Oracle VirtualBox<br>Vagrant]; style DTVM fill:#fff,stroke:#ccc;
DTCM[Docker<br>ContainerD<br>Kubernetes]; style DTCM fill:#fff,stroke:#ccc;
DTVCS[GIT]; style DTVCS fill:#fff,stroke:#ccc;
DTRHS[GitHub, GitLab,<br>BitBucket]; style DTRHS fill:#fff,stroke:#ccc;
DTIAC[Ansible, ServiceNow,<br>Chef,<br>CloudFormation,<br>AWS CDK]; style DTIAC fill:#fff,stroke:#c1c1c1;
DTMO[Prometheus,<br>Grafana,<br>DataDog,<br>Splunk]; style DTMO fill:#fff,stroke:#ccc;
MAIN --> DT
DT -->|Web Server<br>Management| DTWSM
DTWSM -->|Virtualization<br>Management| DTVM 
DTWSM -->|Containerization<br>Management| DTCM
DTCM -->|Version Control| DTVCS
DTVCS -->|VCS Hosting| DTRHS 
DT -->|Infrastructure<br>as<br>Code| DTIAC
DTIAC -->|Monitoring<br>and<br>Observability| DTMO
```

```mermaid
flowchart TB
PM{{Project Management}};style PM fill:#fff,stroke:#000;
DD[Data-Driven<br>Objetive-Based Decision]; style DD fill:#fff,stroke:#ccc;
CD[Collaborative<br>Development]; style CD fill:#fff,stroke:#ccc;
TP[Team Planning]; style TP fill:#fff,stroke:#ccc;
DDSL(( )); style DDSL fill:#fff,stroke:#c1c1c1; 
SLI(SLI); style SLI fill:#fff,stroke:#ccc;
SLO(SLO); style SLO fill:#fff,stroke:#ccc;
CDD(Optimizing Effort<br>through<br>toil reduction); style CDD fill:#fff,stroke:#ccc;
TPD(Efficient Communication<br>Team alignment<br>Agile Methodologies);style TPD fill:#fff,stroke:#ccc;
PM --> DD; PM --> CD; PM --> TP
DD -->|Service Level| DDSL
DDSL --> SLI; DDSL --> SLO
CD --> CDD; TP --> TPD
```

## Technical Skill-Set as Support Engineer

```mermaid
flowchart TD
L((Level 1));style L fill:#ccc,stroke:#000;
SDT{Software<br>Devices & Technologies}; style SDT fill:#fff,stroke:#ccc;
S(Service); style S fill:#fff,stroke:#ccc;
Dv(( ));style Dv fill:#fff,stroke:#000;
Dv1(DSLAMs: Alcatel, Huawey);style Dv1 fill:#fff,stroke:#ccc;
Dv2(Huawei, Dlink, ZTE);style Dv2 fill:#fff,stroke:#ccc;
A(Routing, Diagnostics,<br>Troubleshooting); style A fill:#fff,stroke:#ccc;
A1(E1, SIP-Trunk, Data,<br>Internet); style A1 fill:#fff,stroke:#ccc;
C(Installation & Configuration);style C fill:#fff,stroke:#ccc;
C1(Device SBC: Acme-Packet);style C1 fill:#fff,stroke:#ccc;
M(Monitoring);style M fill:#fff,stroke:#ccc;
M1(Remedy BMC);style M1 fill:#fff,stroke:#ccc;
M2(SolarWind);style M2 fill:#fff,stroke:#ccc;
L --> SDT -->|Telnet, SSH| S
S -->|Voice| A --> A1; A1 -->|Devices| Dv
Dv -->|Voice Multiplexers| Dv1; Dv -->|Firewalls|Dv2 
S -->|Video| C -->|Devices| C1;
SDT --> M; 
M -->|Incident management| M1
M -->|Monitoring| M2
```

```mermaid
flowchart TD
L((Level 2 & 3));style L fill:#ccc,stroke:#000;
SDT{Software<br>Devices & Technologies}; style SDT fill:#fff,stroke:#ccc;
O[Linux, Unix/AIX<br>RHEL/Derivates]; style O fill:#fff,stroke:#ccc;
O1[Process Monitoring<br>Memory Monitoring<br>Network Management<br>Security<br>System Rescue]; style O1 fill:#fff,stroke:#ccc;
OPS[SSH<br>HTTPd, USSD,<br> SMSC, SMPP,<br> HTTP, TCP,<br> UDP, SOAP]; style OPS fill:#fff,stroke:#ccc;
SC[Bash, SQL,<br>Ansible]; style SC fill:#fff,stroke:#ccc;
SC1[Deployment of<br>New Services Features]; style SC1 fill:#fff,stroke:#ccc;
SV[Apache TOMCAT,<br>APACHE HTTP,<br>];style SV fill:#fff,stroke:#ccc;
SL[Jira Software<br>and<br>On Call]; style SL fill:#fff,stroke:#ccc;
L --> SDT
SDT -->|OS Management| O; O -->|Operations| O1
SDT -->|Operations<br>On<br>Protocols| OPS
SDT -->|Scripting| SC --> SC1
SDT -->|Servering| SV
SDT -->|Service Level<br>Agrements| SL
```

## Skill-Set as DevOps

```mermaid
flowchart TD
devops((DevOps)); style devops fill:#dcdcdc,stroke:#000;
tech{{Technologies}}; style tech fill:#fff,stroke:#ccc;
devops --> tech
subgraph Amazon-Web-Services; style Amazon-Web-Services fill:#f7f7f7,stroke:#000;
    IAM[IAM]; style IAM fill:#fff,stroke:#ccc;
    subgraph Developers-Tools; style Developers-Tools fill:#fff,stroke:#ccc;
        direction TB
        DT[CloudShell, CodeCommit<br>CodePipeLine<br>CodeBuild, CodeDeploy];style DT fill:#fff,stroke:#fff;
    end
    subgraph Compute; style Compute fill:#fff,stroke:#ccc;
        direction TB
        COMP[EC2<br>Elastic Beanstalk<br>Lambda]; style COMP fill:#fff,stroke:#fff;
    end
    subgraph Storage; style Storage fill:#fff,stroke:#ccc;
        direction TB
        ST[S3<br>S3 Glacier<br>Elastic File System EFS];style ST fill:#fff,stroke:#fff;
    end
    subgraph Database; style Database fill:#fff,stroke:#ccc;
        direction TB
        DB[DynamoDB<br>and<br>Relational Database<br>Service - RDS]; style DB fill:#fff,stroke:#fff;
    end
    EKS[Elastic K8s Service<br>EKS];style EKS fill:#fff,stroke:#ccc;
    IAM -->|Identity and Security<br>Compliance| Developers-Tools
    Developers-Tools --> Compute --> EKS
    Developers-Tools --> Storage
    Developers-Tools --> Database --> EKS
end
subgraph Version-Control-Systems; style Version-Control-Systems fill:#f2f2f2,stroke:#000;
    direction TB
    GIT[GIT]; style GIT fill:#fff,stroke:#fff;
    GitHub[GitHub]; style GitHub fill:#fff,stroke:#fff;
    GitLab[GitLab]; style GitLab fill:#fff,stroke:#fff;
    GIT --> GitHub; GIT --> GitLab
end
subgraph CI-CD; style CI-CD fill:#f2f2f2,stroke:#000;
    jenkins[Jenkins]; style jenkins fill:#fff,stroke:#fff;
    gitlab[GitLab]; style gitlab fill:#fff,stroke:#fff;
    awscp[AWS<br>Code-Pipeline]; style awscp fill:#fff,stroke:#fff;
end
subgraph Metrics_and_Observability; style Metrics_and_Observability fill:#f2f2f2,stroke:#000;
    metrics[Grafana<br>NewRelic<br>Nagios<br>Prometheus<br>Splunk<br>ChaosSearch<br>Kibana<br>Datadog]
    style metrics fill:#fff,stroke:#fff;
end
subgraph Deployment_Automation; style Deployment_Automation fill:#f2f2f2,stroke:#000;
    direction TB
    tf[Terraform];style tf fill:#fff,stroke:#fff;
    awscf[CloudFormation];style awscf fill:#fff,stroke:#fff;
    ans[Ansible];style ans fill:#fff,stroke:#fff;
    chef[Chef];style chef fill:#fff,stroke:#fff;
end
subgraph Containerization; style Containerization fill:#f2f2f2,stroke:#000;
    direction LR
    docker[Docker];style docker fill:#fff,stroke:#fff;
    kb[Kubernetes];style kb fill:#fff,stroke:#fff;
    docker --> kb
end
tech --> Amazon-Web-Services
Amazon-Web-Services --> Version-Control-Systems --> Containerization --> CI-CD
Amazon-Web-Services --> Metrics_and_Observability
Amazon-Web-Services --> CI-CD --> Deployment_Automation --> Metrics_and_Observability
```

## Skill-Set as Site Reliability Engineer

```mermaid
flowchart TB
sre((&nbsp;Site Reliability&nbsp;<br>Engineer)); style sre fill:#dcdcdc,stroke:#000;
tech{{Technologies<br>and<br>Techniques}}; style tech fill:#fff,stroke:#ccc;
sre --> tech
subgraph Agile-Methodologies; style Agile-Methodologies fill:#f2f2f2,stroke:#000;
    amethod[Safe5<br>Scrum]; style amethod fill:#fff,stroke:#fff;
end
tech --> Agile-Methodologies
```

### Site Reliability Engineering Manager

I take on big challenges and have a strong ability to deliver solutions that thrive in complex environments. I am attracted to innovation, my vision is to focus on discipline, consistency and technique to achieve my goals and objectives as close as possible to the results I expect.

```mermaid
flowchart TD
sre((&nbsp;Site Reliability&nbsp;<br>Engineer)); style sre fill:#dcdcdc,stroke:#000;
tech{{Technologies<br>and<br>Techniques}}; style tech fill:#fff,stroke:#ccc;
sre --> tech
subgraph Information-Tools; style Information-Tools color:#fff,fill:#fff,stroke:#c7c7c7;
    subgraph Agile-Methodologies; style Agile-Methodologies fill:#f2f2f2,stroke:#000;
        amethod[Safe5<br>Scrum]; style amethod fill:#fff,stroke:#fff;
    end
    subgraph Team-Coach; style Team-Coach fill:#fff,stroke:#000;
        comm[Communications Tools]; style comm fill:#fff,stroke:#ccc;
        conf[Confluence]; style conf fill:#fff,stroke:#ccc;
        teams[Microsoft Teams]; style teams fill:#fff,stroke:#ccc;
        miro[Miro Board]; style miro fill:#fff,stroke:#ccc;
        comm --> conf; comm --> teams; comm --> miro
    end
    subgraph Incident-Management; style Incident-Management fill:#fff,stroke:#000;
        direction LR
        jira(Atlassian<br>Jira Software); style jira fill:#fff,stroke:#ccc;
        OL[Microsoft Outlook]; style OL fill:#fff,stroke:#ccc;
        pduty[PagerDuty]; style pduty fill:#fff,stroke:#ccc;
        snow[Service Now]; style snow fill:#fff,stroke:#ccc;
        slack[Slack]; style slack fill:#fff,stroke:#ccc;
        jira --> pduty; jira --> snow
        OL <--> jira
        slack --> pduty; slack --> jira; slack --> snow
    end
    Agile-Methodologies --> Team-Coach --> Incident-Management
end
subgraph Financial-Management; style Financial-Management color:#f2f2f2,fill:#f2f2f2,stroke:#000; 
    AWS[AWS]; style AWS fill:#fff,stroke:#fff;
    BCM[Billing and Cost<br>Management];style BCM fill:#fff,stroke:#fff;
    ACS[AWS<br>Cost Explorer];style ACS fill:#fff,stroke:#fff;
    AWS --> BCM; AWS --> ACS;
end
POINT(( )); style POINT fill:#fff,stroke:#ccc;
POINT -.-> Agile-Methodologies
tech --> Agile-Methodologies
tech --> AWS
BCM -.-> POINT
ACS -.-> POINT
```

Responsible for leading the adoption of agile methodologies to
develop a mindset of success and continuous improvement in my
division's DevOps teams, fostering self-sufficiency and diverse group
agility competencies.

Ensure the methodological application of “The twelve-factor app” in
web and mobile applications, seeking to offer maximum portability in
execution environments, in addition to standardizing the mechanisms
for recording and reporting accuracy on these services and resources
in the cloud.

Delegate tasks to members of the engineering team (eight people) and
advise on all aspects of the project.
Collaborate in the development of plans and roadmaps for new
production releases, manage configurations and service recovery by
applying the different methods of deployment and continuous
delivery.

Ensure SLO prevalence, KPI scoring, manage Application error control,
as well as system alerting and monitoring solutions, organize incident
response and disaster recovery monitoring/collaboration.
Apply various collaborative tools for information flow (Development
Workflow, Asynchronous Collaboration, Process Mapping and
Diagramming), collaborate with the development of plans and
tracking of project cycles using agile methodologies implemented in:
Miro Board, Atlassian's Confluence and Microsoft Teams.

Oversee costs and budgets for each project and service deployed in
the Amazon cloud.
