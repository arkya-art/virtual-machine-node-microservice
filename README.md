# Microservice Deployment Across Multiple VMs

## 🚀 Project Overview
This project demonstrates the process of creating and configuring multiple Virtual Machines (VMs) using VirtualBox, establishing networking between them, and deploying a Node.js-based microservice on one VM. The application is a simple REST API hosted on one VM, which is accessed from another VM to simulate a distributed system.
---

## 🎯 Project Objectives
- **VM Setup**: Create multiple VMs using **VirtualBox**.
- **Networking**: Establish a network to allow communication between the VMs.
- **Microservices**: Deploy a simple **Node.js REST API** on one VM.
- **Distributed System**: Demonstrate a basic multi-service architecture where one VM is hosting its own microservice and another VM accesses it.

---

## 🛠️ Technologies Used
- **VirtualBox**: Virtual machine management software.
- **Node.js**: JavaScript runtime to build the microservices.
- **Express.js**: Framework used to create the REST APIs.
- **GitHub**: Version control and hosting platform.

---

## ✨ Features
- **Microservice Deployment**: A single Node.js microservice is deployed on one VM, providing a simple "Hello from Microservice" message.
- **Networking**: VMs communicate over an internal network using HTTP requests.
- **Distributed System simulation**: One VM hosts the microservice, while another accesses it, simulating real-world distributed system communication.
---

## 🔧 Prerequisites
1. **VirtualBox**: To create and configure VMs.
2. **Node.js and npm**: For creating and running the microservices.
3. **Access to GitHub**: To push the code to your remote repository.

---

## 📝 Setup and Installation

### 1. Clone the Repository
Start by cloning the project repository:
```bash
git clone https://github.com/username/repository.git
cd repository
```

### 2. Set Up Virtual Machines
Create two VMs using VirtualBox.
Install Ubuntu 18.04 or later on both VMs.
Ensure both VMs are connected on an internal network to allow communication between them.

### 3.Install Node.js and npm on VM1 (Microservice Host)
SSH into VM1 and install Node.js and npm:
```bash
sudo apt update
sudo apt install nodejs npm -y
```
Verify installation:
```bash
node -v
npm -v
```


### 4.Deploy Microservice on VM1
On VM1:

Create a project directory and initialize a Node.js project:
```bash
mkdir microservice
cd microservice
npm init -y
```

Install Express.js:
```bash
npm install express
```

Create server.js with the following code:
```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello from Microservice');
});

app.listen(port, () => {
    console.log(`Microservice running on http://0.0.0.0:${port}`);
});
```

Start the server:
```bash
node server.js
```

### 5.Configure Networking Between VMs

On VM1, ensure the firewall allows traffic on port 3000:
```bash
sudo iptables -A INPUT -p tcp --dport 3000 -j ACCEPT
```

On VM2, test access to the microservice hosted on VM1:
```bash
curl http://<VM1_IP>:3000/
```

You should see the response: Hello from Microservice.


#🎉 Conclusion

This project demonstrates how to simulate a distributed system by deploying a Node.js microservice on one VM and accessing it from another VM using an internal network. It provides insight into configuring VMs, setting up networking, and deploying applications in a multi-VM environment.
Feel free to explore the repository, fork it, and make improvements or additions! Happy coding! 😊

###📜 License
This project is licensed under the MIT License – see the LICENSE.md file for details.
