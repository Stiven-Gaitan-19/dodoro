package co.edu.utadeo.dodoro.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
public class Demon implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
    private boolean defeat;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "defeated_on")
    private Date defeatedOn;

    @Column(name = "image_url")
    private String imageUrl;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    private Place place;

    @OneToOne(fetch = FetchType.EAGER, optional = false)
    private BodyPart bodyPart;

    @OneToMany(mappedBy = "demon", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Fight> fights;

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

    public boolean isDefeat() {
        return defeat;
    }

    public void setDefeat(boolean defeat) {
        this.defeat = defeat;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Place getPlace() {
        return place;
    }

    public void setPlace(Place place) {
        this.place = place;
    }

    public BodyPart getBodyPart() {
        return bodyPart;
    }

    public void setBodyPart(BodyPart bodyPart) {
        this.bodyPart = bodyPart;
    }

    public List<Fight> getFights() {
        return fights;
    }

    public void setFights(List<Fight> fights) {
        this.fights = fights;
    }

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy MMM d hh:mm:ss aaa")
    public Date getDefeatedOn() {
        return defeatedOn;
    }

    public void setDefeatedOn(Date defeatedOn) {
        this.defeatedOn = defeatedOn;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Demon demon = (Demon) o;

        return id != null ? id.equals(demon.id) : demon.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

    @Override
    public String toString() {
        return "Demon{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", defeat=" + defeat +
                ", defeatedOn=" + defeatedOn +
                ", imageUrl='" + imageUrl + '\'' +
                ", place=" + place +
                ", bodyPart=" + bodyPart +
                '}';
    }
}
