import { Middleware, Context } from '@nuxt/types'

export const LOGIN_ROUTER = ['/']

const router: Middleware = async (_context: Context) => {
  // ユーザー登録画面リダイレクト処理
  if (isRouter(_context.route.path, '/users/create')) {
    if (!_context.route.query.token) {
      return _context.redirect('/users/login')
    }
    await _context.store.dispatch(`users/createIndex`, { emailVerifyToken: _context.route.query.token })
    const users = _context.store.state.users.users
    if (!users.response || !users.success || users.response.emailVerified) {
      return _context.redirect('/users/login')
    }
  }
  // パスワードリセット画面リダイレクト処理
  if (isRouter(_context.route.path, '/users/passwordReset')) {
    if (!_context.route.query.token) {
      return _context.redirect('/users/login')
    }
    await _context.store.dispatch(`users/passwordResetIndex`, { passwordResetToken: _context.route.query.token })
    const users = _context.store.state.users.users
    if (!users.response || !users.success || users.response.emailPasswordResetVerified) {
      return _context.redirect('/users/login')
    }
  }

  const token = _context.app.$cookies.get('token')
  if (LOGIN_ROUTER.find((el) => isRouter(_context.route.path, el))) {
    // ログイン前リダイレクト処理
    if (!token || typeof token === 'undefined') {
      return _context.redirect('/users/login')
    }
  } else if (token) {
    // ログイン後リダイレクト処理
    return _context.redirect('/')
  }
}

export const isRouter = (path: string, router: string) => {
  return path === router || path === `${router}/`
}

export default router
