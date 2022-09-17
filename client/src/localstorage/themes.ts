/**
 * Ключ, по котору хранится имя темы оформления в localStorage
 */
const ThemeKey = 'theme'

/**
 * Доступные темы оформления
 */
enum ThemeName {
  Brown = 'Brown',
  Gray = 'Gray',
  Blue = 'Blue',
  None = 'None',
}

class Theme {
  /**
   * Установить тему оформления
   * @param theme
   */
  set (theme: ThemeName) {
    if (!Theme.exist(theme)) {
      return
    }
    try {
      localStorage.setItem(ThemeKey, theme)
    } catch {
    }
  }

  /**
   * Получить тему оформления
   */
  get (): ThemeName {
    try {
      const theme = <keyof typeof ThemeName>localStorage.getItem(ThemeKey) || ThemeName.None
      return Theme.exist(theme) ? ThemeName[theme] : ThemeName.None
    } catch {
      return ThemeName.None
    }
  }

  /**
   * Проверяем имя темы оформления на соответствие перечислению ThemeNames
   * @param theme
   */
  static exist (theme: keyof typeof ThemeName) {
    return Object.values(ThemeName).includes(theme as ThemeName)
  }
}

const theme = new Theme()

export { theme, ThemeKey, ThemeName }
