import { Icon } from 'src/shared/ui/icon'

import styles from './footer.module.scss'

import githubIcon from 'assets/github.svg'
import mailIcon from 'assets/mail.svg'
import telegramIcon from 'assets/telegram.svg'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <h3>Created by Andrey Babenkov in 2022</h3>
      <div className={styles.linkContainer}>
        <a
          href="mailto:andrey.babenkov.00@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.link}
        >
          <Icon src={mailIcon} alt="email link" />
        </a>
        <a
          href="https://andreybs.t.me"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.link}
        >
          <Icon src={telegramIcon} alt="telegram link" />
        </a>
        <a
          href="https://github.com/AndreyBS1"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.link}
        >
          <Icon src={githubIcon} alt="github link" />
        </a>
      </div>
    </footer>
  )
}
