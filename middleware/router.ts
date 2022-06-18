import { Middleware, Context } from '@nuxt/types'

const router: Middleware = async (_context: Context) => {
  if (_context.route.path === '/create/') {
    if (!_context.route.query.userId) {
      return _context.redirect('/')
    }
    await _context.store.dispatch(`users/emailVerifyTokenFindUser`, { emailVerifyToken: _context.route.query.userId })
    const response = _context.store.state.users.users.response
    if (!response || Number(response.emailVerified)) {
      return _context.redirect('/')
    }
  }
}

export default router
