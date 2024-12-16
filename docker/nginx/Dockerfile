FROM nginx:latest

COPY ./hosts/afisha.conf /etc/nginx/conf.d/afisha.conf

WORKDIR /data/afisha

VOLUME /data/afisha

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]