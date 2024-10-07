'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search, Edit, Trash2, ExternalLink } from 'lucide-react'


import React from 'react'
import { ArticleDialog } from './article-dialog'
import { IPublicationArticle } from '@/types'

const PublicationArticleTable = ({ publication: initialPublication }: { publication: any }) => {
  const [publication, setPublication] = useState(initialPublication)
  const [searchTerm, setSearchTerm] = useState('')
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingArticle, setEditingArticle] = useState<IPublicationArticle | undefined>(undefined)

  const filteredArticles = publication.articles.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const handleEdit = (article: IPublicationArticle) => {
    setEditingArticle(article)
    setDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    setPublication(prev => ({
      ...prev,
      articles: prev.articles.filter(article => article.id !== id)
    }))
  }

  const handleSave = (articleData: Omit<IPublicationArticle, 'id'>) => {
    if (editingArticle) {
      setPublication(prev => ({
        ...prev,
        articles: prev.articles.map(article => 
          article.id === editingArticle.id ? { ...article, ...articleData } : article
        )
      }))
    } else {
      const newArticle = {
        ...articleData,
        id: Date.now().toString() // Simple ID generation
      }
      setPublication(prev => ({
        ...prev,
        articles: [...prev.articles, newArticle]
      }))
    }
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">{publication.name}</h1>
          <p className="text-gray-600 mt-2">{publication.description}</p>
        </div>
        <Image
          src={publication.logo || '/placeholder.svg'}
          alt={`${publication.name} logo`}
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Articles</h2>
        <Button onClick={() => setDialogOpen(true)} className="flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Add IPublicationArticle
        </Button>
      </div>

      <div className="relative mb-6">
        <Input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
        <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      {filteredArticles.length === 0 ? (
        <p className="text-center text-gray-500">No articles found.</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>URL</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredArticles.map((article) => (
              <TableRow key={article.id}>
                <TableCell>{article.title}</TableCell>
                <TableCell>
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Link
                  </a>
                </TableCell>
                <TableCell className="max-w-xs truncate">{article.description}</TableCell>
                <TableCell>{article.tags.join(', ')}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(article.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <ArticleDialog
        isOpen={dialogOpen}
        onClose={() => {
          setDialogOpen(false)
          setEditingArticle(undefined)
        }}
        article={editingArticle}
        onSave={handleSave}
      />
    </div>
  )
}

export default PublicationArticleTable
