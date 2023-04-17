import s from 'common/components/Loader/Loader.module.scss'

export const Loader = () => {
  return (
    <div className={s.loader_background}>
      <div className={s.loader} />
    </div>
  )
}
