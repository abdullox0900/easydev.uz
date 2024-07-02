import React, { useEffect, useState } from 'react'
import { default as ReactMarkdown } from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'



interface MarkdownViewerProps {
    apiUrl: any
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
            <ReactMarkdown
                children={markdown}
                remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
                components={{
                    h1: 'h2',
                    h2: 'h3',
                    h3: 'h4',
                    code(props) {
                        const { children, className, node, ...rest } = props
                        const match = /language-(\w+)/.exec(className || '')
                        return match ? (
                            <SyntaxHighlighter
                                {...rest}
                                PreTag="div"
                                children={String(children).replace(/\n$/, '')}
                                language={match[1]}
                                style={oneDark}
                            />
                        ) : (
                            <code {...rest} className={className}>
                                {children}
                            </code>
                        )
                    }
                }}
            />
        </div>
    )
}

export default MarkdownViewer