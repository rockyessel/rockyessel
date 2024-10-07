'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { IPublicationArticle } from '@/types'







interface Props {
    isOpen: boolean
    onClose: () => void
    article?: IPublicationArticle
    onSave: (article: Omit<IPublicationArticle, 'id'>) => void

}

export const  ArticleDialog = ({ isOpen,  onClose,  article,  onSave }:Props) =>{
  const [formData, setFormData] = useState<Omit<IPublicationArticle, 'id'>>(
    article || {
      title: '',
      url: '',
      description: '',
      coverImage: '',
      tags: []
    }
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{article ? 'Edit IPublicationArticle' : 'Add New IPublicationArticle'}</DialogTitle>
          <DialogDescription>
            {article ? 'Edit the details of your article here.' : 'Enter the details of your new article here.'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="url" className="text-right">
                URL
              </label>
              <Input
                id="url"
                name="url"
                value={formData.url}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">{article ? 'Save Changes' : 'Add IPublicationArticle'}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
