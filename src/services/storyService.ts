import { StatusCodes } from 'http-status-codes'
import models from '../db/models'
import { StoryInput, StoryUpdate } from '../types/story.type'
import { CustomErrorHandler } from '../utils/ErrorHandling'

class storyService {
  // Lấy danh sách
  async fetchAllStory() {
    const story = await models.Story.findAll()
    return {
      message: 'Thanh cong',
      data: {
        story
      }
    }
  }
   // Thêm mới Tin
   async addNewStory(story: StoryInput, userId: string) {
    const newStory = await models.Story.create({ ...story, user_id: userId })
    return {
      message: 'Thêm Tin thành công',
      data: { newStory }
    }
  }
  // Cập nhật tin
  async updateStory(story_id: string, data: StoryUpdate) {
    const story = await models.Story.findByPk(story_id)
    if (!story) {
      throw new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Tin  không tồn tại!')
    }
    await story.update(data)
    return {
      message: 'Cập nhật tin thành công',
      data: {
        story
      }
    }
  }
   // Xóa tin
   async deleteStory(story_id: string) {
    const story = await models.Story.findByPk(story_id)
    if (!story) {
      throw new CustomErrorHandler(StatusCodes.NOT_FOUND, 'tin không tồn tại!')
    }
    await story.destroy()
    return {
      message: 'Xóa tin thành công',
      data: {
        story
      }
    }
  }
  // CHi tiết tin
  async storyDetail(story_id: string) {
    const storyDetail = await models.Story.findByPk(story_id)
    if (!storyDetail) {
      throw new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Không tìm thấy tin!')
    }
    return {
      message: 'Chi tiết tin.',
      data: {
        storyDetail
      }
    }
  }
}

export default new storyService()
