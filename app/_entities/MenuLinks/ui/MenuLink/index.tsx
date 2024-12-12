'use client'
import Link from 'next/link'
import type { FC } from 'react'
import classnames from '@shared/lib/classnames'
import Text from '@shared/ui/Typography'
import s from '../../styles/MenuLinks.module.scss'

interface Props {
    text: string
    href?: string
    as?: typeof Link | 'button'
}

const MenuLink: FC<Props> = ({ href, text, as = Link }) => {
    return (
        <Text as={as} className={classnames(s.link, 'hover-opacity')} href={href} size='16' align='center' weight='500' lineHeight='120' noWrap>
            {text}
        </Text>
    )
}

export default MenuLink