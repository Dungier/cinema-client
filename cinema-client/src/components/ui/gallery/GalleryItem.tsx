import cn from "classnames"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

import { IGalleryItemProps } from "@/ui/gallery/gallery.interface"

import styles from "./Gallery.module.scss"

const GalleryItem: FC<IGalleryItemProps> = ({ item, variant }) => {
	return (
		<Link href={item.link}>
			<a
				className={cn(styles.item, {
					[styles.withText]: item.content,
					[styles.horizontal]: variant === "horizontal",
					[styles.vertical]: variant === "vertical"
				})}
			>
				<img alt={item.name} src={item.posterPath} draggable={false} />
				{item.content && (
					<div className={styles.content}>
						<div className={styles.title}>{item.content.title}</div>
						{item.content.subTitle && (
							<div className={styles.subTitle}> {item.content.subTitle}</div>
						)}
					</div>
				)}
			</a>
		</Link>
	)
}

export default GalleryItem
