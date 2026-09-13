<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#000000">
  <title>Papunta Na Siya</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Atmosphere overlays -->
  <div class="grain"></div>
  <div class="vignette"></div>
  <div class="scanlines"></div>

  <!-- Found-footage HUD -->
  <div class="hud">
    <div class="corner tl"></div>
    <div class="corner tr"></div>
    <div class="corner bl"></div>
    <div class="corner br"></div>

    <div class="rec-panel">
      <span class="rec-dot"></span>
      <span class="rec-label">REC</span>
      <span class="rec-title">• PAPUNTA NA SIYA</span>
    </div>
    <div class="meta-panel">
      <div class="meta-line" id="metaTime">00:00:00</div>
      <div class="meta-line" id="metaDate">--/--/----</div>
      <div class="meta-line" id="metaBattery">🔋 78%</div>
      <div class="meta-line" id="metaCam">CAM_01</div>
    </div>
  </div>

  <!-- Stage -->
  <main class="stage" id="stage">
    <div class="stage-bg" id="stageBg"></div>

    <!-- Silhouette (appears in Day 2) -->
    <div class="figure" id="figure"></div>

    <!-- Phone chat panel -->
    <div class="phone" id="phone">
      <div class="phone-head">
        <span class="phone-title" id="phoneTitle">Jared</span>
        <span class="phone-time" id="phoneTime">9:45 PM</span>
      </div>
      <div class="phone-body" id="phoneBody"></div>
    </div>

    <!-- Call overlay -->
    <div class="call-overlay" id="callOverlay">
      <div class="call-inner">
        <div class="call-avatar">J</div>
        <div class="call-name">Jared</div>
        <div class="call-status" id="callStatus">Calling...</div>
        <div class="call-timer" id="callTimer">00:00</div>
        <div class="call-buttons">
          <div class="call-btn mute"><i>🔇</i></div>
          <div class="call-btn end"><i>✕</i></div>
        </div>
      </div>
    </div>

    <!-- Story text -->
    <div class="story" id="story"></div>

    <!-- Tap prompt -->
    <div class="tap-prompt" id="tapPrompt">
      <span>TAP TO CONTINUE</span>
      <span class="blink">▮</span>
    </div>
  </main>

  <script src="story.js"></script>
</body>
</html>
