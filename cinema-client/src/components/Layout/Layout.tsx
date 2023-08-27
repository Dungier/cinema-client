import { FC, ReactNode } from "react"

import MobileNavigation from "@/components/Layout/MobileNavigation/MobileNavigation"

import styles from "./Layout.module.scss"
import Navigation from "./Navigation/Navigation"
import SideBar from "./SideBar/SideBar"
// @ts-ignore
const Layout: FC = ({ children }) => {
	return (
		<>
			<MobileNavigation />
			<div className={styles.layout}>
				<Navigation />
				<div className={styles.center}>{children}</div>
				<SideBar />
			</div>
		</>
	)
}

export default Layout
