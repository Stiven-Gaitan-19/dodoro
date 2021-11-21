package co.edu.utadeo.dodoro.rest;

import co.edu.utadeo.dodoro.rest.model.ResponseMessage;
import co.edu.utadeo.dodoro.service.FileService;
import org.aspectj.bridge.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@RestController
@RequestMapping("/api/files")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FilesController {

    @Autowired
    private FileService fileService;

    @PostMapping()
    public ResponseEntity<ResponseMessage> uploadFile(@RequestParam MultipartFile file) throws Exception {
        String fileName = this.fileService.saveFile(file);
        ResponseMessage message = new ResponseMessage(fileName);
        return ResponseEntity.ok().body(message);
    }

    @PutMapping("/{name}")
    public ResponseEntity<ResponseMessage> updateFile(@RequestParam MultipartFile file, @PathVariable String name) throws Exception {
        String fileName = fileService.updateFile(name, file);
        ResponseMessage message = new ResponseMessage(fileName);
        return ResponseEntity.ok().body(message);
    }

    @GetMapping("/{name}")
    public ResponseEntity<?> getDemonsByPlace(@PathVariable String name) throws Exception {

        if(!fileService.existsFile(name)){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Requested file not found");
        }
        Resource file = fileService.getFile(name);
        String contentType = "";
        try {
            contentType = fileService.getContentType(name);
        }catch (Exception e){
            contentType = "image/jpeg";
        }

        return ResponseEntity.ok().contentType(MediaType.parseMediaType(contentType)).header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"").body(file);
    }
}
