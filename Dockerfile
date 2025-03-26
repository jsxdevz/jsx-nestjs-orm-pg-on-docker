# ใช้ Node.js เป็น base image
FROM node:18-alpine

# กำหนด working directory ใน container
WORKDIR /

# คัดลอกไฟล์ package.json และ package-lock.json
COPY package*.json ./

# ติดตั้ง pnpm
RUN npm install -g pnpm

# ติดตั้ง dependencies
RUN pnpm install

# คัดลอกไฟล์ทั้งหมดในโปรเจกต์ไปยัง container
COPY . .

# สร้างแอปพลิเคชัน (กรณีใช้ TypeScript ให้ build ก่อน)
RUN pnpm run build

# เปิดพอร์ต 3000
EXPOSE 3000

# รันคำสั่งเพื่อเริ่มแอปพลิเคชัน
CMD ["pnpm", "run", "start:prod"]
