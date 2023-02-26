import { MigrationInterface, QueryRunner } from 'typeorm';

export class migrations1677431281235 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "CREATE TYPE job_ad_status_enum AS ENUM ('draft', 'published', 'archived');",
    );

    await queryRunner.query(
      'CREATE TABLE "job_ad" ("id" BIGSERIAL NOT NULL, "title" character varying NOT NULL DEFAULT \'\', "description" character varying NOT NULL DEFAULT \'\', "skills" text array NOT NULL DEFAULT \'{}\', "status" "public"."job_ad_status_enum" NOT NULL DEFAULT \'draft\', CONSTRAINT "UQ_5482e092d68165721467491e75c" UNIQUE ("title"), CONSTRAINT "PK_98ab1c14ff8d1cf80d18703b92f" PRIMARY KEY ("id"))',
    );

    await queryRunner.query('ALTER TABLE job_ad OWNER to job_ad;');

    await queryRunner.query(
      "INSERT INTO job_ad (title, description, skills, status) VALUES ('Accounts Payable Specialist', 'Degree in finance and / or accounting or relevant experience, 2 to 3 years experience in accounting, Fluency in English, strong knowledge of German, Strong analytical skills, Good / Advanced Excel skills, Showing good problem identification and resolution abilities, Very good communication skills, Team player with ability to work independently and with remote team members', '{Excel}', 'draft');",
    );
    await queryRunner.query(
      "INSERT INTO job_ad (title, description, skills, status) VALUES ('1st Level Support Agent', 'Detect incident/inquiry, confirm and open “call” in ticketing system, Complete information and classify kind and priority of inquiries/incidents in ticketing System, Detect incomplete components and complete it by customer (or other necessary 3rd party) contact, Assess received incidents/inquiries into 1st Level self resolvable (by agent) and other support group resolvable Tickets, Perform steps of Service Desk internal or other support group assignment, Analyze and Resolve Incidents/Inquiries on 1st Level, Assess found solution, applies/confirms with customer and documents and closes ticket, Document work around, solutions etc. into Knowledge Base (ServiceNow)', '{ServiceNow}', 'published');",
    );
    await queryRunner.query(
      "INSERT INTO job_ad (title, description, skills, status) VALUES ('Site Reliability Engineer', 'Automation whenever it’s possible, Everything as code, US rather than ME, Continuously learning and improving, Proactivity rather than reactivity, Customer-oriented, Curiosity', '{Terraform, CloudFormation, EKS, EKC, EC2}', 'draft');",
    );
    await queryRunner.query(
      "INSERT INTO job_ad (title, description, skills, status) VALUES ('Senior Data Engineer @FinanceScout24 SMG', 'FinanceScout24 is your Swiss digital partner for Finance and Insurance topics. With the motto “As digital as possible, as personal as desired” we developed a great range of web applications and micro services that enable customers to compare and directly contract vehicle and home insurances as well as personal credits.', '{GCP, AWS, DWH, SQL, DBT, Fivetran}', 'archived');",
    );
    await queryRunner.query(
      "INSERT INTO job_ad (title, description, skills, status) VALUES ('Senior Software Engineer (Platform/DevOps) @Goldbach', 'Design and implement infrastructure and platform solutions using AWS, Kubernetes, and other cloud-based technologies, Build and maintain CI/CD pipelines using GitHub, GoCD, and other automation tools, Develop and maintain scripts and automation tools using Python and Bash, Collaborate with the development team to optimize and improve the performance of our product, Monitor and troubleshoot production issues, and work to improve the reliability and stability of our platform, Ensure compliance with security and compliance requirements, Continuously improve and optimize the infrastructure and platform to support the growth and scaling of our product, Collaborate with other teams and stakeholders to define and implement best practices for infrastructure, platform, and security', '{Kubernetes, CI/CD, AWS, Python, Bash}', 'published');",
    );
    await queryRunner.query(
      "INSERT INTO job_ad (title, description, skills, status) VALUES ('Site Reliability Engineer and Security Lead @SMG', 'tutti.ch and anibis.ch have been the biggest classifieds platforms for many years. At the end of 2021, they joined forces together with ricardo.ch and other platforms to create the Swiss Marketplace Group (SMG), one of the largest digital companies in Switzerland. Our headquarter is in Zürich, but we also have offices in Zug, Flamatt, Belgrade, Valbonne and Berlin. For our Platform Team, we are looking for a passionate engineer located in Belgrade for the position of SRE with a focus on Security.', '{Kubernetes, Python, Go, Terraform, Cloud, Linux}', 'draft');",
    );
    await queryRunner.query(
      "INSERT INTO job_ad (title, description, skills, status) VALUES ('Engineering Manager @Real Estate SMG', 'As Engineering Manager in one of our 10 feature teams, you are nurturing the working environment for 5 to 6 engineers. Your ultimate goal is to give them the space and safety they need to thrive, individually and as a whole. They will understand what needs to be built and why, with technically feasible approaches that balance effort and delivery well. Because you empower them, they will contribute their best ideas and find solutions you couldnt have found on your own. You will manage stakeholders and provide guidance for your team to focus on whats important. We foster a blameless culture, learn from mistakes and assume best intentions. Being a role model is very important, especially in managerial positions, so we expect you to listen carefully and self-reflect, but also to provide feedback - favourable or unfavourable. You can count on a product manager and designer dedicated to your team. Apart from your team, youll also drive topics of great importance on the company level with your engineering manager peer-group.', '{VueJS, Typescript, NodeJS, Lambda, DynamoDB, SQS, SNS, S3}', 'published');",
    );
    await queryRunner.query(
      "INSERT INTO job_ad (title, description, skills, status) VALUES ('(Senior) Data Analyst @Doodle', 'Doodle is looking for an experienced (Senior) Data Analyst who can gather data, understand problems, and makes recommendations based on Doodles data, stakeholder input and company goals.', '{SQL, Python, DBT, Google Analytics}', 'draft');",
    );
    await queryRunner.query(
      "INSERT INTO job_ad (title, description, skills, status) VALUES ('Senior Frontend Engineer @Doodle', 'Doodle is looking for an experienced (Senior) Frontend Engineer who will help in developing well-engineered, robust, cutting-edge, high-quality software solutions and platforms, in line with business needs and strategy and in accordance with the project plan, specifications and IT standards.', '{JavaScript, Typescript, React, CSS, HTML, Jest}', 'draft');",
    );
    await queryRunner.query(
      "INSERT INTO job_ad (title, description, skills, status) VALUES ('Email Marketing Manager @JobCloud', 'Working with internal and external creative resources to develop effective marketing automation for all our CRM-dependent communications, Creating targeting strategies to drive desired behavior in order to build segmentation and modeling as well as recommendations for future campaigns, Implementing and owning state-of-the-art email marketing automation setup and flows over Salesforce Marketing Cloud, Managing all facets of the email & CRM processes, from concepts to development, audience management, testing and email distribution including the coordination of all assets such as text copy, design, imagery, and translations in various languages and markets, Articulation and championing of in-house email marketing practices, Planning and execution A/B testing on emails, email conversion flows and landing pages linked to emails, Maintaining high levels of data hygiene over high-volume data sets from Salesforce Marketing Cloud, Google Analytics, Google Big Query, Tealium and our own internal data warehouse., Understand CRM systems/data and effectively translate this knowledge into solutions to engage and reengage our core users and customers, Defining and continually refining key performance metrics to measure overall CRM effectiveness.', '{CRM, Salesforce}', 'draft');",
    );
    await queryRunner.query(
      "INSERT INTO job_ad (title, description, skills, status) VALUES ('Senior Android Engineer @tutti.ch SMG', 'tutti.ch is one of the most popular second-hand marketplaces in Switzerland with almost 3 million Monthly Active Users. We have offices in Zurich and Belgrade, and we are part of TX Group, a media company headquartered in Zurich.', '{Android, Kotlin, Kotlin Coroutines, RxJava, Koin, Dagger 2, Hilt}', 'draft');",
    );
    await queryRunner.query(
      "INSERT INTO job_ad (title, description, skills, status) VALUES ('Senior Frontend Software Engineer @ UnityCMS', 'Our team is responsible for developing the UI for Unity - a multi-tenant cloud-based headless CMS (Content Management System) which is used by major news brands in Switzerland (20min.ch, tagesanzeiger.ch to name a two). About a thousand editors use our CMS and millions read the articles written in it every day. It is a central hub for editorial staff, which empowers writers and journalists to publish, review and distribute different types of media and articles to our variety of online news sites and platforms and soon print as well.', '{React.js, Javascript (ES6+), Typescript, CSS, Koin}', 'draft');",
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
