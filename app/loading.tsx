import styles from '@/app/loading.module.css'

export default function Loading() {
	// Or a custom loading skeleton component
	return (<div className="flex items-center w-full min-h-screen fixed z-50 inset-0 justify-center bg-default gap-4">
		<span className={styles.loader}></span>
		</div>);
}
