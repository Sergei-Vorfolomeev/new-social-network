import s from 'features/components/common/Loader/Loader.module.scss'

export const Loader = () => {
  return (
    <div className={s.loader_background}>
      <div className={s.loader} />
    </div>
  )
}
