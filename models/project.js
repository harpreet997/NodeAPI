const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
  projectname: {
    type: String,
    required: [true, 'must provide project name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  clientname: {
    type: String,
    required: [true, 'must provide client name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  }
  
  
})

module.exports = mongoose.model('Project', ProjectSchema)