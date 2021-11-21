package co.edu.utadeo.dodoro.service;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Date;

@Service
public class FileService {

    private final String UPLOAD_PATH = "src/main/resources/uploads/";

    public String saveFile(MultipartFile file) throws Exception {
        return createFile(file);
    }

    public String updateFile(String oldFileName, MultipartFile file) throws Exception {
        if(!deleteFile(oldFileName)){
            throw new Exception("Cannot delete file"+oldFileName);
        }
        return createFile(file);
    }

    public Resource getFile(String filename) throws Exception {
        return new UrlResource(Paths.get(UPLOAD_PATH+filename).toUri());
    }

    public boolean existsFile(String fileName){
        File file = new File(Paths.get(UPLOAD_PATH+fileName).toUri());
        return file.exists();
    }

    private String createFile(MultipartFile file) throws Exception {
        String finalFileName = "";
        byte[] bytes = null;
        try{
            bytes = file.getBytes();
        }catch (IOException e){
            throw new Exception("Cannot upload file!!");
        }

        String extension = getExtensionFile(file.getOriginalFilename());
        finalFileName = String.valueOf(new Date().getTime())+extension;
        Path path = Paths.get(UPLOAD_PATH+finalFileName);
        Files.write(path, bytes);

        return finalFileName;
    }

    public boolean deleteFile(String fileName) throws Exception {
        File file = new File(Paths.get(UPLOAD_PATH+fileName).toUri());
        if(!existsFile(fileName)){
            throw new Exception("File not found");
        }
        return file.delete();
    }

    private String getExtensionFile(String fileName) throws Exception {
        int i = fileName.lastIndexOf('.');
        if (i < 0) {
            throw new Exception("File not have extension");
        }
        return fileName.substring(i);
    }

    public String getContentType(String fileName) throws IOException {
        return Files.probeContentType(Paths.get(UPLOAD_PATH+fileName));
    }

}
