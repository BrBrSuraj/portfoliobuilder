const Logo = (probs) => {
  return (
    <div className="flex items-center gap-2">
    <h1 className={`bg-appBackground rounded-full p-6 text-white text-3xl ${probs.textSm , probs.padding}`}>PB</h1>
    <p className={`text-2xl font-extrabold tracking-widest text-appBackground ${probs.visibilityHidden}`}>
      Portfolio
    </p>
  </div>
  )
}

export default Logo