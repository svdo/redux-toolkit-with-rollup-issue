(
  cd lib
  yarn
  yarn link
  yarn build
)

(
  cd app
  yarn
  yarn link lib
  yarn build
)

echo "Now open app/public/test.html and check the console for errors."
