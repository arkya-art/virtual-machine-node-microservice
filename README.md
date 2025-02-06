# Microservice Deployment Across Multiple VMs

## 🚀 Project Overview
This project demonstrates the process of creating and configuring multiple Virtual Machines (VMs) using **VirtualBox**, establishing networking between them, and deploying **Node.js**-based microservices on each VM. The application is a simple **REST API** hosted on two VMs, where each VM runs a separate microservice. 

---

## 🎯 Project Objectives
- **VM Setup**: Create multiple VMs using **VirtualBox**.
- **Networking**: Establish a network to allow communication between the VMs.
- **Microservices**: Deploy a simple **Node.js REST API** on each VM.
- **Distributed System**: Demonstrate a basic multi-service architecture where each VM is hosting its own microservice.

---

## 🛠️ Technologies Used
- **VirtualBox**: Virtual machine management software.
- **Node.js**: JavaScript runtime to build the microservices.
- **Express.js**: Framework used to create the REST APIs for each microservice.
- **GitHub**: Version control and hosting platform.

---

## ✨ Features
- **Microservice 1**: Deployed on VM1, provides a simple "Hello from Microservice on VM1" message.
- **Microservice 2**: Deployed on VM2, provides a simple "Hello from Microservice on VM2" message.
- **Networking**: VMs communicate over an internal network using HTTP requests.
- **Multiple VMs**: The application is deployed across two VMs, simulating a real-world distributed system.

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
