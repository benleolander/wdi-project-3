const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  name: { type: String, required: 'Please enter a display name' },
  rating: {type: Number, min: [1, 'Please enter a rating'] },
  body: { type: String, required: 'Please enter a comment'}
}, {
  timestamps: true
})

const itemSchema = new mongoose.Schema({
  name: { type: String, maxlength: 50, required: 'Please add a title' },
  image: { type: String, required: 'Please add an image' },
  creator: { type: mongoose.Schema.ObjectId, ref: 'Creator', required: true },
  description: { type: String, maxlength: 500, required: 'Please add a description' },
  categories: { type: Array, required: 'Please select at least one catagory' },
  comments: [ commentSchema ]
}, {
  timestamps: true
})

itemSchema.virtual('averageRating')
  .get(function(){
    const total = this.comments.reduce((total, comment) => {
      return total + comment.rating
    }, 0)
    const avg = total/this.comments.length

    return Math.round(avg * 10) / 10 //Rounds avg to 1 decimal place while keeping it as a number
  })

itemSchema.virtual('averageRating', {
  ref: 'Item',
  localField: '_id',
  foreignField: 'Item.averageRating'
})

itemSchema.set('toJSON', {
  virtuals: true
})



module.exports = mongoose.model('Item', itemSchema)
