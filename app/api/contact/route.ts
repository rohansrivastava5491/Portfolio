import { writeFile, readFile, mkdir } from "fs/promises"
import { join } from "path"
import { existsSync } from "fs"
import { NextRequest, NextResponse } from "next/server"

interface ContactData {
  name: string
  email: string
  message: string
  timestamp: string
}

const DATA_DIR = join(process.cwd(), "public", "data")
const CONTACTS_FILE = join(DATA_DIR, "contacts.json")

async function ensureDataDir() {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true })
  }
}

async function getContacts(): Promise<ContactData[]> {
  try {
    await ensureDataDir()
    if (!existsSync(CONTACTS_FILE)) {
      return []
    }
    const data = await readFile(CONTACTS_FILE, "utf-8")
    return JSON.parse(data)
  } catch (error) {
    console.error("Error reading contacts:", error)
    return []
  }
}

async function saveContact(contact: ContactData): Promise<boolean> {
  try {
    await ensureDataDir()
    const contacts = await getContacts()
    contacts.push(contact)
    await writeFile(CONTACTS_FILE, JSON.stringify(contacts, null, 2))
    return true
  } catch (error) {
    console.error("Error saving contact:", error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const contact: ContactData = {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    }

    const success = await saveContact(contact)

    if (success) {
      return NextResponse.json(
        { success: true, message: "Contact saved successfully" },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { error: "Failed to save contact" },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const contacts = await getContacts()
    return NextResponse.json(contacts, { status: 200 })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
