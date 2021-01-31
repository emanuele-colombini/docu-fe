FROM ubuntu

RUN apt-get update
RUN apt-get -y install curl wget git

# installing node
RUN curl -sL https://deb.nodesource.com/setup_15.x | bash -
RUN apt-get -y install nodejs

# installing angular cli and yarn
RUN npm i -g @angular/cli@9.1.13
RUN npm i -g yarn

# creating user
RUN useradd -ms /bin/bash docu
USER docu