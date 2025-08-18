import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import checker from 'vite-plugin-checker'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		checker({
			typescript: {
				tsconfigPath: path.resolve(__dirname, 'tsconfig.app.json')
			}
		})
	],
	build: {
		sourcemap: false,
		rollupOptions: {
			onLog(level, log, handler) {
				if (
					log.message.includes(
						`Error when using sourcemap for reporting an error: Can't resolve original location of error.`
					)
				) {
					return
				}
				handler(level, log)
			}
		}
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	}
})
