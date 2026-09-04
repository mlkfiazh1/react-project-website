# NestJS Deployment Guide — AWS EC2 + Nginx + SSL + Domain Mapping

This guide covers building a NestJS app locally and deploying it to an AWS EC2 instance, with Nginx as a reverse proxy, SSL via Let's Encrypt, and domain mapping.

---

## 1. Launch and Configure the EC2 Instance

### Create the instance

1. Go to **AWS Console → EC2 → Launch Instance**.
2. **Name**: e.g. `nestjs-app-server`.
3. **AMI**: Ubuntu Server 24.04 LTS (or 22.04 LTS).
4. **Instance type**: `t2.micro` (free tier) or `t3.small`/`t3.medium` for production load.
5. **Key pair**: Create new (e.g. `nestjs-key.pem`) or select existing — download and store it safely.
6. **Network settings**:
   - Allow SSH (port 22) — restrict source to _My IP_ for security.
   - Allow HTTP (port 80) from anywhere.
   - Allow HTTPS (port 443) from anywhere.
7. **Storage**: 8–20 GB gp3 is usually enough for a NestJS app.
8. Click **Launch Instance**.

### Connect to the instance

```bash
chmod 400 nestjs-key.pem
ssh -i nestjs-key.pem ubuntu@<PUBLIC_IP>
```

### Allocate a static IP

EC2 public IPs change on stop/restart, so use an Elastic IP:

1. **EC2 → Elastic IPs → Allocate Elastic IP address**.
2. Select it → **Actions → Associate Elastic IP address** → choose your instance.
3. Use this Elastic IP for your DNS A record later (Step 9).

---

scp -i your-key.pem -r dist/\* ubuntu@your-ec2-public-ip:/tmp/dist

# Move build files to Nginx's web root

sudo mkdir -p /var/www/myapp
sudo cp -r /tmp/dist/\* /var/www/myapp/

# Configure Nginx

sudo nano /etc/nginx/sites-available/myapp

server {
listen 80;
server*name your-domain.com; # or just * if no domain yet

    root /var/www/myapp;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;  # important for React Router
    }

}

sudo ln -s /etc/nginx/sites-available/myapp /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default # remove default site
sudo nginx -t # test config
sudo systemctl restart nginx

# Add a domain + HTTPS

sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
