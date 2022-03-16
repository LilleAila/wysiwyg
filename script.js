const watchdog = new CKSource.EditorWatchdog();

window.watchdog = watchdog;

watchdog.setCreator((element, config) => {
  return CKSource.Editor.create(element, config).then((editor) => {
    // Set a custom container for the toolbar.
    document
      .querySelector(".document-editor__toolbar")
      .appendChild(editor.ui.view.toolbar.element);
    document.querySelector(".ck-toolbar").classList.add("ck-reset_all");

    return editor;
  });
});

watchdog.setDestructor((editor) => {
  // Set a custom container for the toolbar.
  document
    .querySelector(".document-editor__toolbar")
    .removeChild(editor.ui.view.toolbar.element);

  return editor.destroy();
});

watchdog.on("error", handleError);

watchdog
  .create(document.querySelector(".editor"), {
    licenseKey: "",
  })
  .catch(handleError);

function handleError(error) {
  console.error("Oops, something went wrong!");
  console.error(
    "Please, report the following error on https://github.com/ckeditor/ckeditor5/issues with the build id and the error stack trace:"
  );
  console.warn("Build id: q2zsr83ldlwd-p9a84e586u8i");
  console.error(error);
}
