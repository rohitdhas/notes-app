import { Spinner, Box } from "../styles/loaderStyles";

export default function Loader() {
  return (
    <Box id="loader">
      <Spinner />
    </Box>
  );
}

export function startLoader() {
  const loader = document.getElementById("loader");
  loader.classList.add("active");
}

export function stopLoader() {
  const loader = document.getElementById("loader");
  loader.classList.remove("active");
}
