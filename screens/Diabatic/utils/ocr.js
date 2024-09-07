export const performOCR = (file, setExtractedText, setImageLoading, setOcrProgress, setFormData) => {
    setImageLoading(true);
    setOcrProgress(0);
  
    const myHeaders = new Headers();
    myHeaders.append("apikey", "FEmvQr5uj99ZUvk3essuYb6P5lLLBS20");
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: file,
    };
  
    // Mock progress for demo purposes
    let progressInterval = setInterval(() => {
      setOcrProgress((prev) => {
        if (prev < 90) {
          return prev + 10;
        } else {
          clearInterval(progressInterval);
          return 90;
        }
      });
    }, 1000);
  
    fetch("https://api.apilayer.com/image_to_text/upload", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setOcrProgress(100);
        clearInterval(progressInterval);
  
        if (result.error) {
          Alert.alert("OCR Error", result.error.message);
        } else {
          setExtractedText(result["all_text"] || "");
          populateFormFields(result["all_text"] || "", setFormData);
        }
      })
      .catch((error) => {
        Alert.alert("Network Error", "Failed to communicate with OCR service.");
      })
      .finally(() => {
        setImageLoading(false);
      });
  };
  