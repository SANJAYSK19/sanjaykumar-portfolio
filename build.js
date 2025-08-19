import { build } from 'vite'

async function run() {
  try {
    await build()
    console.log("✅ Vite build completed successfully")
  } catch (err) {
    console.error("❌ Build failed:", err)
    process.exit(1)
  }
}

run()
