import { Middleware, Context } from '@nuxt/types'

const router: Middleware = async (_context: Context) => {
  if (_context.route.path === 'users/create' || _context.route.path === '/users/create/') {
    if (!_context.route.query.token) {
      return _context.redirect('/users/login')
    }
    await _context.store.dispatch(`users/createIndex`, { emailVerifyToken: _context.route.query.token })
    const users = _context.store.state.users.users
    if (!users.response || !users.success || users.response.emailVerified) {
      return _context.redirect('/users/login')
    }
  }
  if (_context.route.path === 'users/passwordReset' || _context.route.path === '/users/passwordReset/') {
    if (!_context.route.query.token) {
      return _context.redirect('/users/login')
    }
    await _context.store.dispatch(`users/passwordResetIndex`, { passwordResetToken: _context.route.query.token })
    const users = _context.store.state.users.users
    if (!users.response || !users.success || users.response.emailPasswordResetVerified) {
      return _context.redirect('/users/login')
    }
  }
}

export default router
