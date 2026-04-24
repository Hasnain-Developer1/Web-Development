## How to setup Tailwind CSS

Step1: Run the following commands
```
npm install -D tailwindcss
npx tailwindcss init
```

Step2: Update tailwind.config.js file to include this line:
```
content: ["*.html"],
```

Step 3: Create src/input.css to include:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 4: Include the src/output.css file to your html file

Step 5: Run the following commands:
```
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```