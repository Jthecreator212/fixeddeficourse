const fs = require("fs")
const path = require("path")

// Function to recursively find all .ts and .tsx files
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      findFiles(filePath, fileList)
    } else if (file.endsWith(".ts") || file.endsWith(".tsx")) {
      fileList.push(filePath)
    }
  })

  return fileList
}

// Function to update imports in a file
function updateImportsInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8")

    // Replace imports of module-template-generator.ts with .tsx
    const updatedContent = content.replace(
      /from ['"](.*)module-template-generator['"]|from ['"](.*)module-template-generator.ts['"]/g,
      (match, p1, p2) => {
        const prefix = p1 || p2 || ""
        return `from "${prefix}module-template-generator.tsx"`
      },
    )

    if (content !== updatedContent) {
      fs.writeFileSync(filePath, updatedContent, "utf8")
      console.log(`Updated imports in ${filePath}`)
    }
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error)
  }
}

// Main function
function updateAllImports() {
  const files = findFiles(".")
  files.forEach(updateImportsInFile)
  console.log("All imports updated!")
}

updateAllImports()
