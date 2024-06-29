import { marked } from 'marked'
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'


interface MarkdownViewerProps {
    apiUrl: string
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ apiUrl }) => {

    const [markdown, setMarkdown] = useState('')

    useEffect(() => {
        const fetchMarkdown = async () => {
            try {
                const response = await fetch(apiUrl)
                const text = await response.text()
                setMarkdown(text)
            } catch (error) {
                console.error('Error fetching markdown file:', error)
            }
        }

        fetchMarkdown()
    }, [apiUrl])

    return (
        <div>
            <ReactMarkdown>{markdown}</ReactMarkdown>
            <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
        </div>
    )
}

export default MarkdownViewer