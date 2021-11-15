package co.edu.utadeo.dodoro.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "body_part")
public class BodyPart implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

    @OneToOne(mappedBy = "bodyPart")
    @JsonIgnore
    private Demon demon;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Demon getDemon() {
        return demon;
    }

    public void setDemon(Demon demon) {
        this.demon = demon;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        BodyPart bodyPart = (BodyPart) o;

        return id != null ? id.equals(bodyPart.id) : bodyPart.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

    @Override
    public String toString() {
        return "BodyPart{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
