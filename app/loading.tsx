import styles from '@/app/loader.module.css'

export default function Loading() {
	// Or a custom loading skeleton component
	return (<div className="flex items-center w-full min-h-screen justify-center gap-4">
		<span className={styles.loader}></span>
		</div>);
}
