import config from '../../../config'
import { User } from './user.model'
import { generateUserId } from './user.utils'
import { IUser } from './users.interface'

const createUser = async (user: IUser): Promise<IUser | null> => {
  //auto genereted incremental id
  const id = await generateUserId()

  user.id = id

  //default password
  if (!user.password) {
    user.password = config.default_user_pass as string
  }
  const createUser = await User.create(user)
  if (!createUser) {
    throw new Error('Failed to Create User')
  }
  return createUser
}

export default {
  createUser,
}
