npx create-next-app@lastest ./
1. Setup:
Typescript  : Yes
ESLint      : No
TailwindCSS : Yes
src/        : No
app/        : Yes
Alios       : No

npm run dev

2. Giải thích Structure:
(khác clip) trong components thống nhất là tạo thư mục /.tsx
 
constant: 
chứa các biến toàn cục 
 
layout.js: 
wrap các component trong app
Thẻ metadata
ví dụ: 

< Navbar/>
    < main className = "realative overflow-hidden">
        {children} 
    </ main>
< Footer/> 

page.js:
đại diện cho Homepage (trang mặc định)

Globals.css:
chứa css toàn cục cho project

Component folder cùng cấp với app folfer:
tạo file dạng .tsx 

3. Vào link này copy paste các starter
global.css, 
tailwind.config.ts,
https://gist.github.com/adrianhajdin/8576813dae0085beaac8291e8a63c32d