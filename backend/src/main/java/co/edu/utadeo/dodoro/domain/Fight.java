package co.edu.utadeo.dodoro.domain;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
public class Fight implements Serializable, Comparable<Fight>{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "fought_on")
    private Date foughtOn;

    private boolean defeated;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(foreignKey = @ForeignKey(name="demon_id"), name = "demon_id")
    private Demon demon;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Demon getDemon() {
        return demon;
    }

    public void setDemon(Demon demon) {
        this.demon = demon;
    }

    public Date getFoughtOn() {
        return foughtOn;
    }

    public void setFoughtOn(Date foughtOn) {
        this.foughtOn = foughtOn;
    }

    public boolean isDefeated() {
        return defeated;
    }

    public void setDefeated(boolean defeated) {
        this.defeated = defeated;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Fight fight = (Fight) o;

        return id != null ? id.equals(fight.id) : fight.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

    @Override
    public String toString() {
        return "Fight{" +
                "id=" + id +
                ", foughtOn=" + foughtOn +
                ", defeated=" + defeated +
                ", demon=" + demon +
                '}';
    }

    @Override
    public int compareTo(Fight f) {
        if (getFoughtOn() == null || f.getFoughtOn() == null) {
            return 0;
        }
        return getFoughtOn().compareTo(f.getFoughtOn());
    }
}
