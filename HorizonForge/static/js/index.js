const HF_VARIANT_ROWS = [
  {
    key: 'original',
    title: 'Original Reference',
    note: 'Raw Waymo clip and recorded trajectory overlay.',
    videoFilename: 'original.mp4',
    trajectoryFilename: 'trajectory_original.mp4',
    videoLabel: 'Video',
    trajectoryLabel: 'Trajectory (Original)'
  },
  {
    key: 'ours',
    title: 'HorizonForge Edit',
    note: 'Edited scene paired with our generated rollout.',
    videoFilename: 'ours.mp4',
    trajectoryFilename: 'trajectory.mp4',
    videoLabel: 'Video',
    trajectoryLabel: 'Trajectory (Ours)'
  }
];

const ORIGINAL_VARIANT = HF_VARIANT_ROWS.find((variant) => variant.key === 'original');
const GENERATED_VARIANT = HF_VARIANT_ROWS.find((variant) => variant.key === 'ours');

const HF_GROUPS = [
  {
    key: 'ego',
    title: 'Ego Vehicle Behaviors',
    description: 'Direct controls that keep the self-driving car aligned with intent.',
    tasks: [
      {
        key: 'direction_change',
        title: 'Direction Change',
        summary: 'Command-level left/right turns for the ego vehicle.',
        samples: [
          {
            id: 'scene_004_1_ego_direction_change_turn_right',
            title: 'Scene 004 · Right Turn',
            note: 'Merge smoothly into the right-hand street.'
          },
          {
            id: 'scene_140_1_ego_direction_change_turn_left',
            title: 'Scene 140 · Left Turn',
            note: 'Command a smooth left turn across a wide intersection.'
          },
          {
            id: 'scene_065_1_ego_direction_change_turn_left',
            title: 'Scene 065 · Left Turn',
            note: 'Sweep through the wide avenue at moderate speed.'
          },
          {
            id: 'scene_081_1_ego_direction_change_turn_right',
            title: 'Scene 081 · Right Turn',
            note: 'Thread the ego car through evening traffic.'
          }
        ]
      },
      {
        key: 'lane_change',
        title: 'Lane Change',
        summary: 'Lateral adjustments for the ego car in mixed traffic.',
        samples: [
          {
            id: 'scene_086_1_ego_lane_change_left',
            title: 'Scene 086 · Lane Change Left',
            note: 'Glide left to line up with the off-ramp.'
          },
          {
            id: 'scene_035_1_ego_lane_change_right',
            title: 'Scene 035 · Lane Change Right',
            note: 'Shift toward the ramp while keeping clearance.'
          },
          {
            id: 'scene_067_1_ego_lane_change_left',
            title: 'Scene 067 · Gentle Lane Change',
            note: 'Move left around slow traffic.'
          },
          {
            id: 'scene_081_1_ego_lane_change_right',
            title: 'Scene 081 · Lane Change Right',
            note: 'Return to the rightmost lane before the light.'
          }
        ]
      },
      {
        key: 'speed_change',
        title: 'Speed Change',
        summary: 'Longitudinal commands such as accelerate, brake, or stop.',
        samples: [
          {
            id: 'scene_004_1_ego_speed_change_accelerate',
            title: 'Scene 004 · Accelerate',
            note: 'Speed up to catch the green phase.'
          },
          {
            id: 'scene_029_1_ego_speed_change_accelerate',
            title: 'Scene 029 · Accelerate',
            note: 'Push forward to catch the open window.'
          },
          {
            id: 'scene_079_1_ego_speed_change_decelerate',
            title: 'Scene 079 · Decelerate',
            note: 'Ease off the throttle before the busy merge.'
          },
          {
            id: 'scene_140_1_ego_speed_change_accelerate',
            title: 'Scene 140 · Accelerate',
            note: 'Apply gentle throttle leaving the intersection.'
          }
        ]
      }
    ]
  },
  {
    key: 'other',
    title: 'Other-Agent Manipulation',
    description: 'Edits applied to surrounding traffic participants.',
    tasks: [
      {
        key: 'direction_change',
        title: 'Direction Change',
        summary: 'Redirect highlighted agents through new turns.',
        samples: [
          {
            id: 'scene_020_2_other_vehicle_4_direction_change_turn_left',
            title: 'Scene 020 · Vehicle 4 Left Turn',
            note: 'Guide the distant car through a left exit.'
          },
          {
            id: 'scene_029_2_other_vehicle_1_direction_change_turn_right',
            title: 'Scene 029 · Vehicle 1 Right Turn',
            note: 'Redirect another agent into the right branch.'
          },
          {
            id: 'scene_081_2_other_vehicle_2_direction_change_turn_left',
            title: 'Scene 081 · Vehicle 2 Left Turn',
            note: 'Handle a left turn in dense traffic.'
          },
          {
            id: 'scene_140_2_other_vehicle_3_direction_change_turn_right',
            title: 'Scene 140 · Vehicle 3 Right Turn',
            note: 'Navigate the outer vehicle to the right.'
          }
        ]
      },
      {
        key: 'lane_change',
        title: 'Lane Change',
        summary: 'Move specific agents between lanes.',
        samples: [
          {
            id: 'scene_020_2_other_vehicle_4_lane_change_left',
            title: 'Scene 020 · Vehicle 4 Lane Change',
            note: 'Swing the highlighted car left to prepare for the exit.'
          },
          {
            id: 'scene_067_2_other_vehicle_1_lane_change_left',
            title: 'Scene 067 · Vehicle 1 Lane Change',
            note: 'Left lane request for the highlighted car.'
          },
          {
            id: 'scene_079_2_other_vehicle_0_lane_change_right',
            title: 'Scene 079 · Vehicle 0 Lane Change',
            note: 'Shift the lead car to the right lane.'
          },
          {
            id: 'scene_086_2_other_vehicle_0_lane_change_left',
            title: 'Scene 086 · Vehicle 0 Left Lane',
            note: 'Move the truck left to create space.'
          }
        ]
      },
      {
        key: 'speed_change',
        title: 'Speed Change',
        summary: 'Acceleration, braking, and stopping behaviors.',
        samples: [
          {
            id: 'scene_004_2_other_vehicle_0_speed_change_accelerate',
            title: 'Scene 004 · Vehicle 0 Accelerate',
            note: 'Boost the assistant vehicle.'
          },
          {
            id: 'scene_079_2_other_vehicle_1_speed_change_accelerate',
            title: 'Scene 079 · Vehicle 1 Accelerate',
            note: 'Bring the highlighted car up to speed.'
          },
          {
            id: 'scene_086_2_other_vehicle_0_speed_change_stop',
            title: 'Scene 086 · Vehicle 0 Stop',
            note: 'Bring the large van to a complete stop.'
          },
          {
            id: 'scene_140_2_other_vehicle_3_speed_change_accelerate',
            title: 'Scene 140 · Vehicle 3 Accelerate',
            note: 'Push the far vehicle forward at the exit.'
          }
        ]
      },
      {
        key: 'insertion',
        title: 'Object Insertion',
        summary: 'Drop new vehicles into the driving scene.',
        samples: [
          {
            id: 'scene_004_2_other_vehicle_insertion_a_black_suv',
            title: 'Scene 004 · Black SUV',
            note: 'Insert a black SUV onto the main road.'
          },
          {
            id: 'scene_029_2_other_vehicle_insertion_a_red_fire_truck',
            title: 'Scene 029 · Fire Truck',
            note: 'Add a red fire truck near the curb.'
          },
          {
            id: 'scene_065_2_other_vehicle_insertion_a_black_delivery_truck',
            title: 'Scene 065 · Delivery Truck',
            note: 'Spawn a black delivery truck mid-block.'
          },
          {
            id: 'scene_067_2_other_vehicle_insertion_a_pink_sports_car',
            title: 'Scene 067 · Pink Sports Car',
            note: 'Drop in a contrasting pink sports car.'
          }
        ]
      },
      {
        key: 'removal',
        title: 'Object Removal',
        summary: 'Erase distracting agents to declutter scenes.',
        samples: [
          {
            id: 'scene_004_2_other_vehicle_removal_0',
            title: 'Scene 004 · Remove Vehicle 0',
            note: 'Clean removal of the slow-moving sedan.'
          },
          {
            id: 'scene_029_2_other_vehicle_removal_1',
            title: 'Scene 029 · Remove Vehicle 1',
            note: 'Erase the mid-lane commuter car.'
          },
          {
            id: 'scene_065_2_other_vehicle_removal_0',
            title: 'Scene 065 · Remove Vehicle 0',
            note: 'Remove the obstructing truck.'
          },
          {
            id: 'scene_113_2_other_vehicle_removal_0',
            title: 'Scene 113 · Remove Vehicle 0',
            note: 'Erase the obstructing vehicle at the merge.'
          }
        ]
      }
    ]
  }
];

const buildMediaPath = (groupKey, taskKey, sampleId, filename) =>
  `videos/${groupKey}/${taskKey}/${sampleId}/${filename}`;

const createVideoElement = (src) => {
  const video = document.createElement('video');
  video.src = src;
  video.controls = true;
  video.loop = true;
  video.muted = true;
  video.playsInline = true;
  video.autoplay = true;
  video.setAttribute('autoplay', '');
  video.preload = 'metadata';
  const tryPlay = () => {
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {
        video.setAttribute('data-autoplay-blocked', 'true');
      });
    }
  };
  video.addEventListener('canplay', tryPlay, { once: true });
  video.addEventListener('error', () => {
    video.setAttribute('data-error', 'true');
  });
  return video;
};

const createVideoPanel = (label, src) => {
  const panel = document.createElement('div');
  panel.className = 'hf-video-panel';

  const caption = document.createElement('span');
  caption.className = 'hf-panel-label';
  caption.textContent = label;

  panel.appendChild(caption);
  panel.appendChild(createVideoElement(src));
  return panel;
};

const getSceneLabel = (sample) => {
  const idMatch = sample.id.match(/^scene_(\d+)/i);
  if (idMatch) {
    return `Scene ${idMatch[1]}`;
  }
  const titlePrefix = sample.title.split('·')[0];
  return titlePrefix ? titlePrefix.trim() : sample.title;
};

const formatOriginalTitle = (sample) => `${getSceneLabel(sample)} · Original`;
const formatGeneratedTitle = (sample) => sample.title;

const createVariantCard = (groupKey, taskKey, sample, variant, customTitle) => {
  const card = document.createElement('div');
  card.className = `hf-pair-card hf-pair-card--${variant.key}`;

  const variantLabel = document.createElement('span');
  variantLabel.className = 'hf-variant-label';
  variantLabel.textContent = variant.title;

  const title = document.createElement('p');
  title.className = 'hf-scene-title';
  title.textContent = customTitle;

  const videoPair = document.createElement('div');
  videoPair.className = 'hf-video-pair';

  const videoSrc = buildMediaPath(groupKey, taskKey, sample.id, variant.videoFilename);
  const trajSrc = buildMediaPath(groupKey, taskKey, sample.id, variant.trajectoryFilename);

  videoPair.appendChild(createVideoPanel(variant.videoLabel, videoSrc));
  videoPair.appendChild(createVideoPanel(variant.trajectoryLabel, trajSrc));

  card.appendChild(variantLabel);
  card.appendChild(title);
  card.appendChild(videoPair);
  return card;
};

const createSampleRow = (groupKey, taskKey, sample) => {
  if (!ORIGINAL_VARIANT || !GENERATED_VARIANT) {
    return document.createElement('div');
  }

  const row = document.createElement('div');
  row.className = 'hf-sample-row';

  row.appendChild(
    createVariantCard(groupKey, taskKey, sample, ORIGINAL_VARIANT, formatOriginalTitle(sample))
  );

  row.appendChild(
    createVariantCard(groupKey, taskKey, sample, GENERATED_VARIANT, formatGeneratedTitle(sample))
  );

  return row;
};

const createTaskCard = (groupKey, task) => {
  const card = document.createElement('article');
  card.className = 'hf-task-card';

  const header = document.createElement('div');
  header.className = 'hf-task-header';

  const title = document.createElement('h3');
  title.className = 'hf-task-title';
  title.textContent = task.title;

  const summary = document.createElement('p');
  summary.className = 'hf-task-summary';
  summary.textContent = task.summary;

  header.appendChild(title);
  header.appendChild(summary);
  card.appendChild(header);

  const sampleGrid = document.createElement('div');
  sampleGrid.className = 'hf-sample-grid';

  task.samples.forEach((sample) => {
    sampleGrid.appendChild(createSampleRow(groupKey, task.key, sample));
  });

  card.appendChild(sampleGrid);

  return card;
};

const createGroupSection = (group) => {
  const section = document.createElement('section');
  section.className = 'hf-group';

  const header = document.createElement('div');
  header.className = 'hf-group-header';

  const label = document.createElement('p');
  label.className = 'hf-group-label';
  label.textContent = group.key === 'ego' ? 'Ego' : 'Other agents';

  const title = document.createElement('h2');
  title.className = 'hf-group-title';
  title.textContent = group.title;

  const copy = document.createElement('p');
  copy.className = 'hf-group-copy';
  copy.textContent = group.description;

  header.appendChild(label);
  header.appendChild(title);
  header.appendChild(copy);

  section.appendChild(header);

  group.tasks.forEach((task) => {
    section.appendChild(createTaskCard(group.key, task));
  });

  return section;
};

const renderGallery = (root) => {
  if (!root) {
    return;
  }
  root.innerHTML = '';
  HF_GROUPS.forEach((group) => {
    root.appendChild(createGroupSection(group));
  });
};

const updateStats = () => {
  let taskCount = 0;
  let sceneCount = 0;
  HF_GROUPS.forEach((group) => {
    taskCount += group.tasks.length;
    group.tasks.forEach((task) => {
      sceneCount += task.samples.length;
    });
  });

  const videoCount = sceneCount * HF_VARIANT_ROWS.length * 2; // video + trajectory per variant

  const taskEl = document.getElementById('hf-stat-task-count');
  const sceneEl = document.getElementById('hf-stat-scene-count');
  const videoEl = document.getElementById('hf-stat-video-count');

  if (taskEl) taskEl.textContent = taskCount.toString();
  if (sceneEl) sceneEl.textContent = sceneCount.toString();
  if (videoEl) videoEl.textContent = videoCount.toString();
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('hf-demo-root');
  renderGallery(root);
  updateStats();
});

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  // Load saved theme
  const savedTheme = localStorage.getItem('hf-theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggle.textContent = '☀️';
  } else {
    themeToggle.textContent = '🌙';
  }

  // Toggle theme on click
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('hf-theme', isDark ? 'dark' : 'light');
  });
}
