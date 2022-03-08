FROM openjdk:17-jdk-alpine
VOLUME /tmp
ARG JAR_FILE

COPY backend/target/spring-boot-react-bundle-backend.jar app.jar

ENTRYPOINT ["java","Djava.security.egd=filr:/dev/./urandom","-Dspring.profiles.active=docker","-jar","/app.jar"]