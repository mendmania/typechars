
<script setup>
import Highcharts from 'highcharts'

const props = defineProps({
    correctCharsPerSec: {
        type: Array,
        requied: true,
    },
    wrongCharsPerSec: {
        type: Array,
        requied: true,
    },
})

const arrayCorrectCharsPerSecond = computed(() => {
    return props.correctCharsPerSec
})
const arrayWrongCharsPerSecond = computed(() => {
    return props.wrongCharsPerSec
})

onMounted(() => {

    Highcharts.chart('container', {
        chart: {
            type: 'spline',
            text: '#fff',
            backgroundColor: null,
            scrollablePlotArea: {
                minWidth: 600,
                scrollPositionX: 1
            }
        },
        title: {
            text: 'Speed chars typed per minute',
            style: {
                color: '#fff',
            },
            align: 'left',
            textColor: '#fff'
        },
        subtitle: {
            text: 'Correct and wrong chars typed for one minute.',
            style: {
                color: '#fff',
            },
            align: 'left'
        },
        xAxis: {
            type: 'linear',
            style: {
                color: '#fff',
            },
            labels: {
                overflow: 'justify'
            }
        },
        yAxis: {
            title: {
                text: 'Chars typed per second (chars/s)'
            },
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            alternateGridColor: null,
            plotBands: [{ // Light air
                from: 0,
                to: 1.67,
                color: 'rgba(68, 170, 213, 0.1)',
                label: {
                    text: 'Beginner',
                    style: {
                        color: '#606060'
                    }
                }
            }, { // Light breeze
                from: 1.68,
                to: 3.3,
                color: 'rgba(0, 0, 0, 0)',
                label: {
                    text: 'Novice',
                    style: {
                        color: '#606060'
                    }
                }
            }, { // Gentle breeze
                from: 3.5,
                to: 5,
                color: 'rgba(68, 170, 213, 0.1)',
                label: {
                    text: 'Intermediate',
                    style: {
                        color: '#606060'
                    }
                }
            }, { // Moderate breeze
                from: 5.1,
                to: 6.6,
                color: 'rgba(0, 0, 0, 0)',
                label: {
                    text: 'Advanced',
                    style: {
                        color: '#606060'
                    }
                }
            }, { // Fresh breeze
                from: 6.7,
                to: 20,
                color: 'rgba(68, 170, 213, 0.1)',
                label: {
                    text: 'Expert',
                    style: {
                        color: '#606060'
                    }
                }
            },
            ]
        },
        tooltip: {
            valueSuffix: ' chars/s'
        },
        plotOptions: {
            spline: {
                lineWidth: 3,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                marker: {
                    enabled: false
                },
                pointInterval: 1, // one hour
                pointStart: 1//Date.UTC(2020, 3, 15, 0, 0, 0)
            }
        },
        series: [{
            name: 'Correct typed',
            style: {
                color: '#fff',
            },
            color: '#c1ff72',
            data: arrayCorrectCharsPerSecond.value

        }, {
            name: 'Wrong typed',
            color: '#CC0000',
            data: arrayWrongCharsPerSecond.value,
        }],
        navigation: {
            menuItemStyle: {
                fontSize: '10px'
            }
        }
    });

})

</script>

<template>
    <div class="chart max-w-screen-lg w-full">

        <figure class="highcharts-figure w-full">
            <div id="container"></div>
            <!-- <p class="highcharts-description">
                This demo shows how plot bands can be used on an axis to
                highlight regions of a chart. In this example, the plot
                bands are used to separate the wind speeds on the Y-axis
                into categories.
            </p> -->
        </figure>

        <!-- <figure class="highcharts-figure">
            <div id="container"></div>
            <p class="highcharts-description">
                Spline charts are smoothed line charts, and this example
                shows an inverted spline chart. Inverting the chart means the
                X-axis is positioned as the vertical axis, and the Y-axis is
                positioned as the horizontal axis. This can be more intuitive
                for certain data sets, such as in this chart where the X-axis
                represents vertical altitude.
            </p>
        </figure> -->

    </div>
</template>


<style lang="scss">
.highcharts-figure,
.highcharts-data-table table {
    min-width: 310px;
    max-width: 800px;
    margin: 1em auto;
}

.highcharts-data-table table {
    font-family: Verdana, sans-serif;
    border-collapse: collapse;
    border: 1px solid #ebebeb;
    margin: 10px auto;
    text-align: center;
    width: 100%;
    max-width: 500px;
}

.highcharts-data-table caption {
    padding: 1em 0;
    font-size: 1.2em;
    color: #555;
}

.highcharts-data-table th {
    font-weight: 600;
    padding: 0.5em;
}

.highcharts-data-table td,
.highcharts-data-table th,
.highcharts-data-table caption {
    padding: 0.5em;
}

.highcharts-data-table thead tr,
.highcharts-data-table tr:nth-child(even) {
    background: #f8f8f8;
}

.highcharts-data-table tr:hover {
    background: #f1f7ff;
}

.highcharts-credits {
    display: none;
}


// .highcharts-figure,
// .highcharts-data-table table {
//     min-width: 310px;
//     max-width: 800px;
//     margin: 1em auto;
// }

// .highcharts-data-table table {
//     font-family: Verdana, sans-serif;
//     border-collapse: collapse;
//     border: 1px solid #ebebeb;
//     margin: 10px auto;
//     text-align: center;
//     width: 100%;
//     max-width: 500px;
// }

// .highcharts-data-table caption {
//     padding: 1em 0;
//     font-size: 1.2em;
//     color: #555;
// }

// .highcharts-data-table th {
//     font-weight: 600;
//     padding: 0.5em;
// }

// .highcharts-data-table td,
// .highcharts-data-table th,
// .highcharts-data-table caption {
//     padding: 0.5em;
// }

// .highcharts-data-table thead tr,
// .highcharts-data-table tr:nth-child(even) {
//     background: #f8f8f8;
// }

// .highcharts-data-table tr:hover {
//     background: #f1f7ff;
// }
</style>