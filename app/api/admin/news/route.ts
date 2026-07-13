import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const filePath = path.join(process.cwd(), 'data', 'news.json')

export async function GET() {
  try {
    if (!fs.existsSync(filePath)) {
      return NextResponse.json([])
    }
    const data = await fs.promises.readFile(filePath, 'utf8')
    return NextResponse.json(JSON.parse(data))
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read data' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const id = formData.get('id') ? Number(formData.get('id')) : null
    const title = formData.get('title') as string
    const source = formData.get('source') as string
    const date = formData.get('date') as string
    const category = formData.get('category') as 'media-coverage' | 'digital-media'
    const subcategory = formData.get('subcategory') as string
    const desc = formData.get('desc') as string
    const link = (formData.get('link') as string) || '#'
    const imageFile = formData.get('image') as File | null

    const removeImage = formData.get('removeImage') === 'true'

    let imagePath = (formData.get('existingImage') as string) || ''
    if (removeImage) {
      imagePath = ''
    }

    if (imageFile && imageFile.name && imageFile.size > 0) {
      // Save image file to public/ directory
      const bytes = await imageFile.arrayBuffer()
      const buffer = Buffer.from(bytes)

      const fileExt = path.extname(imageFile.name) || '.png'
      const filename = `news-${Date.now()}${fileExt}`
      const publicPath = path.join(process.cwd(), 'public', filename)

      await fs.promises.writeFile(publicPath, buffer)
      imagePath = `/${filename}`
    }

    // Read existing news
    let newsList = []
    if (fs.existsSync(filePath)) {
      const fileContent = await fs.promises.readFile(filePath, 'utf8')
      newsList = JSON.parse(fileContent)
    }

    // Map subcategory to mediaType
    let mediaType: 'Newspaper' | 'University' | 'Press Release' | 'TV' | 'Interview' | 'Podcast' = 'Newspaper'
    if (subcategory === 'University News') mediaType = 'University'
    else if (subcategory === 'Press Releases') mediaType = 'Press Release'
    else if (subcategory === 'Television Coverage') mediaType = 'TV'
    else if (subcategory === 'Interviews') mediaType = 'Interview'
    else if (subcategory === 'Podcasts') mediaType = 'Podcast'

    if (id) {
      // Edit mode
      newsList = newsList.map((item: any) => {
        if (item.id === id) {
          return {
            ...item,
            title,
            source,
            date,
            category,
            subcategory,
            desc,
            link,
            image: imagePath || undefined,
            mediaType,
          }
        }
        return item
      })
    } else {
      // Add mode
      const nextId =
        newsList.length > 0 ? Math.max(...newsList.map((n: any) => n.id)) + 1 : 1
      const newItem = {
        id: nextId,
        title,
        source,
        date,
        desc,
        category,
        subcategory,
        link,
        image: imagePath || undefined,
        mediaType,
      }
      newsList.push(newItem)
    }

    // Create data folder if it doesn't exist
    const dirPath = path.dirname(filePath)
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true })
    }

    await fs.promises.writeFile(
      filePath,
      JSON.stringify(newsList, null, 2),
      'utf8'
    )
    return NextResponse.json({ success: true, news: newsList })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to save news' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = Number(searchParams.get('id'))
    if (!id) {
      return NextResponse.json({ error: 'Missing article ID' }, { status: 400 })
    }

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'No news database found' }, { status: 404 })
    }

    const fileContent = await fs.promises.readFile(filePath, 'utf8')
    let newsList = JSON.parse(fileContent)
    newsList = newsList.filter((item: any) => item.id !== id)

    await fs.promises.writeFile(
      filePath,
      JSON.stringify(newsList, null, 2),
      'utf8'
    )
    return NextResponse.json({ success: true, news: newsList })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to delete news' },
      { status: 500 }
    )
  }
}
