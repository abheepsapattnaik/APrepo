import Typography from "@material-ui/core/Typography";

const Experience = () => {
    return (<div>
            <Typography variant={'h6'}>
                Website of a Trading app
                May 2021 – Present
            </Typography>
            <Typography >
                Worked on flutter framework to reuse few logics written for mobile and incorporate it to create the website aligning to the new designs.
                Tech: Flutter, dart, git
                Tools: Azure devops
            </Typography>
            <Typography variant={'h6'}>
                Ui for US based Manufacturing and Construction Client
                Aug 2020 – Feb 2021
            </Typography>
            <Typography >
                Worked as UI developer to develop features .
                Followed TDD with unit tests.
                Worked on test cafe for integration test and galen tests for styling .
                Fixed bugs.
                Tech: Angular 8(NgRx, RxJs), Mountebank, Test cafe, Galen, Jest framework , Pact test
            </Typography>
            <Typography variant={'h6'}>
                Enterprise App for a Retail Client
                Mar 2019 – Aug 2020
            </Typography>
            <Typography >
                Worked on an enterprise app for a US based retail Client to develop various features .
                It focused on migrating the users from excel based work system to the new app.
                Tech Stack: Angular 7, Protractor Test(Integration test), Jasmine test(unit), Spring boot(Java 9), Flyway, Kafka, Kotlin, Docker, Git, Flyway
                Tools: IntelliJ, Teamcity, SQL server, Docker
            </Typography>

            <Typography variant={'h6'}>
                Data Migration and Integration
                Feb 2017 – Jul 2018
            </Typography>

            <Typography >
                After the merger of the two giant Hospitality based companies, the data is required to be migrated to the acquiring company’s platform.So an application was developed which would extract details from the existing application of the acquired company , transform it and load to the other platform. The files were extracted into the AWS S3, based on the business logic and mappings the data was loaded to the database of the developed application. Then the request were fired from this application to load the transformed data to the target application. This application named as Transformation Gateway migrated the rates and pricing data from one application to the other .
                For pushing any updates to the target platform, at first a script was run to get the updates and push as JSON to the Amazon S3. From Amazon S3 the data is loaded to the Client’s Couchbase.

                Environment: Java 1.6,Spring,Scriptella,Maven,MyBatis
                Tools:Eclipse(Luna,Mars),SQL Developer,IBM Websphere V7.0, Tortoise SVN , GitHub,Amazon S3

                Responsibilities:
                • Developed code as per the requirement.
                • Implemented business logics.
                • Fixed defects on the developed code.
                • Unit testing of owned use cases.
                • Migrated Production data and pushed updated data to Couchbase.
                • Maintained the application and enhanced it based on the Change Requests .

                The application developed migrated all the existing production rates data with transformation based on the Client’s requirement. The product was delivered before the expected time period. The application was able to handle large data without failure.
                With the data getting updated , the application was capable of pushing the changes from the database to the Couchbase of the Client.
            </Typography>
            <Typography variant={'h6'}>
                Application Maintenance
                Aug 2016 – Jan 2017
            </Typography>
            <Typography >
                The application is the integral part of the reservation system . It supports the Distribution of rates, inventory and related data to enable the gateway system to process Availability, Booking, Modify and Cancellation request.Direct Connect platform has been designed to enable external vendors to connect with Central Reservation System.It supports bookings made through third party vendors .
                Responsibilities:
                • Maintained the code for the application.
                • Fixed bugs.
                • Added enhancements to the existing code as per the requirement of the client.
                • Unit testing using JUnit test cases.
                I have had 3+ years of IT Experience in developing applications using Java/J2EE technologies such as Core Java, JSP, Servlets, Spring Core, Spring MVC, MyBatis, Scriptella, Maven, RESTful Webservices, Hibernate as well.
                I have worked using IntelliJ, TeamCity, AzDo, Git, SQL server, Amazon S3, Flyway, Docker
                (Microsoft SQL Server, Eclipse, IBM websphere v7, Jenkins, Tortoise SVN, Oracle SQL Developer)
            </Typography>
           </div>
    );
};

export default Experience;