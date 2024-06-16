import { Request, Response } from 'express'
import { UserOutput } from '../types/user.type'
import { sendResponseSuccess } from '../utils/response'
import models from '../db/models'
import { Op } from 'sequelize'

// [PATCH] /api/v1/comment-video/:video_id
const getCommentVideoItem = async (req: Request, res: Response) => {
  try {
    const { video_id } = req.params
    const comments = await models.CommentVideo.findAll({
      where: {
        video_id,
        parent_id: null // Fetch only parent comments
      },
      include: [
        {
          model: models.User,
          as: 'user',
          attributes: ['user_id', 'first_name', 'last_name'],
          include: [
            {
              model: models.Profile,
              attributes: ['cover_photo']
            }
          ]
        },
        {
          model: models.CommentVideo,
          as: 'children' // Include các bản ghi con,
        }
      ],
      order: [['createdAt', 'ASC']]
    })

    // Tính số lượng children của mỗi bình luận cha
    comments.forEach((comment: any) => {
      comment.dataValues.children_count = comment.children.length
      // Xóa đi children để tránh lưu vào kết quả cuối cùng
      delete comment.dataValues.children
    })

    return res.json({
      message: 'Lấy comment thành công',
      data: comments
    })
  } catch (error: any) {
    return res.status(500).json({
      message: 'Đã có lỗi xảy ra',
      error: error.message
    })
  }
}

const getCommentVideoPartentItem = async (req: Request, res: Response) => {
  try {
    const { comment_id } = req.params

    const comments = await models.CommentVideo.findAll({
      where: {
        parent_id: comment_id // Fetch only parent comments
      },
      include: [
        {
          model: models.User,
          as: 'user',
          attributes: ['user_id', 'first_name', 'last_name'],
          include: [
            {
              model: models.Profile,
              attributes: ['cover_photo']
            }
          ]
        }
      ],
      order: [['createdAt', 'ASC']]
    })

    return res.json({
      message: 'Lấy comment thành công',
      data: comments
    })
  } catch (error: any) {
    return res.status(500).json({
      message: 'Đã có lỗi xảy ra',
      error: error.message
    })
  }
}

// [POST] /api/v1/comment-video/:video_id
const addCommentVideo = async (req: Request, res: Response) => {
  try {
    const { video_id } = req.params
    const { content, reply_id, parent_id } = req.body
    const user = req.user as UserOutput

    const comment = await models.CommentVideo.create({
      video_id,
      content,
      mentioned_user_id: reply_id ? reply_id : '',
      parent_id: parent_id,
      user_id: user.user_id
    })

    return sendResponseSuccess(res, {
      message: 'Bỏ like thành công',
      data: comment
    })
  } catch (error: any) {
    return res.status(500).json({
      message: 'Dã có lỗi xảy ra',
      error: error.message
    })
  }
}

// [PATCH] /api/v1/comment-video/:video_id
const editCommentVideo = async (req: Request, res: Response) => {
  try {
    const { video_id } = req.params
    const { content, reply_id, parent_id, comment_id } = req.body
    console.log(comment_id)
    const comment = await models.CommentVideo.update(
      {
        content
      },
      {
        where: {
          id: comment_id,
          video_id
        }
      }
    )

    return sendResponseSuccess(res, {
      message: 'Chỉnh sửa commnet thành công',
      data: comment
    })
  } catch (error: any) {
    return res.status(500).json({
      message: 'Dã có lỗi xảy ra',
      error: error.message
    })
  }
}

// [DELETE] /api/v1/comment-video/:comment_id
const deleteCommentItem = async (req: Request, res: Response) => {
  try {
    const { comment_id } = req.params
    console.log(comment_id)
    if (!comment_id) {
      throw new Error('comment_id is required')
    }
    const comnent = models.CommentVideo.destroy({
      where: {
        [Op.or]: [{ id: comment_id }, { parent_id: comment_id }]
      }
    })
    return sendResponseSuccess(res, {
      message: 'Xóa comment thành công',
      data: {}
    })
  } catch (error: any) {
    return res.status(500).json({
      message: 'Dã có lỗi xảy ra',
      error: error.message
    })
  }
}

export { getCommentVideoItem, addCommentVideo, getCommentVideoPartentItem, editCommentVideo, deleteCommentItem }
